class Api::PostsController < ApplicationController
  before_action :require_signed_in

  def index
    # TODO: Does this need to be changed? Right now everyone can access
    # the index of all posts via the api.

    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = Post.new(post_params)

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
      render json: @post.errors.full_messages
    else
      render json: @post.errors_full_messages,
                   status: :unprocessable_entity
    end
  end

  private
  def post_params
    params.require(:permit).params(:author_id, :wall_id, :body)
  end
end
