class Api::InvitationsController < ApplicationController
  before_action :require_signed_in

  def index
    if params[:received_invitations]
      @invitations = User.find(params[:id])
                         .received_invitations
                         .includes(:inviter)
    elsif params[:sent_invitations]
      @invitations = User.find(params[:id])
                         .sent_invitations
                         .includes(:invitee)
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
end