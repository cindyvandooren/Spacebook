class Api::NotificationsController < ApplicationController
  before_action :require_signed_in
  before_action :require_current_user, only: :show

  def index
    @notifications = Notification.all
  end

  def show
    @notification = Notification.find(params[:id])
  end

  def create
    @notification = Notification.new(notification_params)

    if @notification.save
      render :show
    else
      render json: @notifications.errors.full_messages,
                   status: :unprocessable_entity
    end
  end

  private
  def notification_params
    params.require(:notification).permit(:user_id, :body)
  end

  def require_current_user
    @notification = Notification.find(params[:id])
    unless notification.user_id == current_user.id
      render json: {}
    end
  end
end
