class Api::FriendshipsController < ApplicationController
  before_action :require_signed_in
  before_action :need_invitation, only: :create

  def index
    @friendships = Friendship.all
  end

  def create
    @friendship = Friendship.new(friendship_params)

    if @friendship.save
      Notification.create!(
        user_id: @friendship.friend_id,
        body: "You and #{@friendship.owner.username} are now friends."
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

  def need_invitation
    id = current_user.id
    invitation = Invitation.where("inviter_id = ? OR invitee_id = ?", id, id)
    invitation ? true : false
  end
end
