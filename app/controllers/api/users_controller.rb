class Api::UsersController < ApplicationController
  before_action :require_signed_in
  # before_action :require_own_profile, only: [:update]
  # TODO: validate that the user can only edit his own page

  def index
    @users = User.all
  end

  def show
    @user = User.includes(timeline_posts: :author).find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if @user.update(update_params)
      render :show
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
end
