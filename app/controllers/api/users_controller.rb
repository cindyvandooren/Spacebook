class Api::UsersController < ApplicationController
  before_action :require_signed_in
  before_action :require_own_profile, only: [:update]

  def index
    if params[:query]
      @users = User.where("lower(username) LIKE ?", params[:query].downcase + "%")
                   .order(username: :asc)
    else
      @users = User.all.order(username: :asc)
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if @user.update(update_params)
      render :show
      Notification.create!(
        user_id: @user.id,
        body: "You updated your profile."
      )
    else
      render json: @user.errors.full_messages,
                   status: :unprocessable_entity
    end
  end

  private
  def update_params
    params.require(:user).permit(
                                  :last_note_time,
                                  :birthday,
                                  :interests,
                                  :home_planet,
                                  :planet_of_birth,
                                  :profile_img_id,
                                  :background_img_id
                                 )
  end

  def require_own_profile
    user = User.find(params[:id])
    unless current_user.id == user.id
      render json: "You can't change other user's profiles."
    end
  end
end
