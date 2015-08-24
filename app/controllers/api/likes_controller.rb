class Api::LikesController < ApplicationController
  before_action :require_signed_in

  def index
    @likes = Like.all
  end

  def show
    @like = Like.find(params[:id])
  end

  def create
    @like = Like.new(like_params)
    @like.liker_id = current_user.id

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages,
                   status: :unprocessable_entity
    end
  end

  def destroy
    @like = Like.find(params[:id])

    if @like.destroy
      render json: {}
    else
      render json: @like.errors.full_messages,
                   status: :unprocessable_entity
    end
  end

  private
  def like_params
    params.require(:like).permit(:liker_id, :likeable_id, :likeable_type)
  end
end
