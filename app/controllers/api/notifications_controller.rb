class Api::NotificationsController < ApplicationController
  before_action :require_signed_in
  before_action :require_current_user, only: :show

  def index
    @notifications = current_user.show_new_notifications
  end

  def show
    @notification = Notification.find(params[:id])
  end

  def create
    @notification = Notification.new(notification_params)

    if @notification.save
      render :show
    else
      render json: @notification.errors.full_messages,
                   status: :unprocessable_entity
    end
  end

  def update
    @notification = Notification.find(params[:id])

    if @notification.update(notification_params)
      render :show
    else
      render json: @notification.errors.full_messages,
                   status: :unprocessable_entity
    end

  end

  private
  def notification_params
    params.require(:notification).permit(:user_id, :body, :seen)
  end

  def require_current_user
    @notification = Notification.find(params[:id])
    unless notification.user_id == current_user.id
      render json: {}
    end
  end
end
