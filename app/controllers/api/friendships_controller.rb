class Api::FriendshipsController < ApplicationController
  before_action :require_signed_in

  def index
    if params[:id]
      @friendships = User.find(params[:id]).friends.includes(:friend)
    else
      @friendships = Friendship.all
    end
  end

  def create
    @friendship = Friendship.new(friendship_params)

    if @friendship.save
      Notification.create!(
        user_id: @friendship.friend_id,
        body: "#{current_user.username} and you are now friends."
      )

      Notification.create!(
        user_id: current_user.id,
        body: "You and #{@friendship.friend.username} are now friends."
      )
      render :show
    else
      render json: @friendship.errors.full_messages,
                   status: :unprocessable_entity
    end
  end

  private
  def friendship_params
    params.require(:friendship).permit(:friend_id, :own_id)
  end
end
