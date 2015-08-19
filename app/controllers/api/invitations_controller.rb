class Api::InvitationsController < ApplicationController
  before_action :require_signed_in

  def index
    if params[:id]
      @invitations = Invitation.where("invitee_id = ? or inviter_id = ?", params[:id], params[:id])
                               .includes(:invitee, :inviter)
    else
      @invitations = Invitation.all
    end
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
      Notification.create!(
        user_id: @invitation.invitee_id,
        body: "You and #{@invitation.inviter.username} are not meant to be friends."
      )

      Notification.create!(
        user_id: @invitation.inviter_id,
        body: "You and #{@invitation.invitee.username} are not meant to be friends."
      )
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
end
