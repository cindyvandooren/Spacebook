class Api::FriendshipsController < ApplicationController
  before_action :require_signed_in

  def index
    if params[:id]
      @friendships = User.find(params[:id]).friends.includes(:friend)
    else
      @friendships = Friendship.all
    end
  end

  def created
    @friendship = Friendship.new(friendship_params)

    if @friendship.save
      render :show
    else
      render json: @friendship.errors.full_messages,
                   status: :unprocessable_entity
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])

    if @friendship.destroy
      render json: {}
    else
      render json: @friendship.errors.full_messages,
                   status: :unprocessable_entity
    end
  end

  private
  def friendship_params
    params.require(:friendships).permit(:friend_id, :own_id)
  end
end
