class Api::PostsController < ApplicationController
  before_action :require_signed_in
  before_action :require_own_post, only: [:update, :destroy]

  def index
    # TODO: Does this need to be changed? Right now everyone can access
    # the index of all posts via the api.

    if params[:profile]
      @posts = User.find(params[:id]).timeline_posts.includes(:author)
    else
      # TODO: Eventually the feed posts should go here, but I don't
      # have a feed page yet.
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
      render json: @post.errors_full_messages,
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
