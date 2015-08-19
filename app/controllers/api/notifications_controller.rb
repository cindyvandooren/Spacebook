class Api::NotificationsController < ApplicationController
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
end
