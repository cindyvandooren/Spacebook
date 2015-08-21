class Api::PostsController < ApplicationController
  before_action :require_signed_in
  before_action :require_own_post, only: [:update, :destroy]

  def index
    if params[:profile]
      @posts = Post.where(timeline_id: params[:id])
                   .includes(:author, :receiver)
                   .limit(15)

    elsif params[:feed]
      friends = current_user.friends.pluck(:friend_id)
      @posts = Post.where(author_id: friends)
                   .includes(:author, :receiver)
                   .limit(15)
    else
      @posts = Post.all
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      if @post.timeline_id != current_user.id
        Notification.create!(
          user_id: @post.timeline_id,
          body: "#{current_user.username} posted on your timeline."
        )

        Notification.create!(
          user_id: current_user.id,
          body: "You posted on #{@post.receiver.username}'s timeline."
        )
      end
      render :show
    else
      render json: @post.errors.full_messages,
                   status: :unprocessable_entity
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages,
                   status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if @post.destroy
      render json: {}
    else
      render json: @post.errors.full_messages,
                   status: :unprocessable_entity
    end
  end

  private
  def post_params
    params.require(:post).permit(:author_id, :timeline_id, :body)
  end

  def require_own_post
    post = Post.find(params[:id])
    unless current_user.id == post.author_id
      render json: "You can't change other user's posts"
    end
  end
end
