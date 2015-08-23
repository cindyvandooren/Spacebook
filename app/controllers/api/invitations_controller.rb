class Api::InvitationsController < ApplicationController
  before_action :require_signed_in
  before_action :require_invitation_relation, only: :destroy

  def index
    @invitations = Invitation.all
  end

  def show
    @invitation = Invitation.find(params[:id])
  end

  def create
    @invitation = Invitation.new(invitation_params)
    @invitation.inviter_id = current_user.id

    if @invitation.save
      Notification.create!(
        user_id: @invitation.invitee_id,
        body: "#{current_user.username} would like to be friends."
      )

      Notification.create!(
        user_id: current_user.id,
        body: "You sent #{@invitation.invitee.username} a friend request."
      )
      render :show
    else
      render json: @invitation.errors.full_messages,
                   status: :unprocessable_entity
    end
  end

  def destroy
    @invitation = Invitation.find(params[:id])

    if @invitation.destroy
      render json: {}
    else
      render json: @invitation.errors_full_messages,
                   status: :unprocessable_entity
    end
  end

  private
  def invitation_params
    params.require(:invitation).permit(:inviter_id, :invitee_id)
  end

  def require_invitation_relation
    @invitation = Invitation.find(params[:id])
    unless (is_inviter?(@invitation) || is_invitee?(@invitation))
      render json: {}
    end
  end

  def is_inviter?(invitation)
    current_user.id = invitation.inviter_id
  end

  def is_invitee?(invitation)
    current_user.id = invitation.invitee_id
  end
end
