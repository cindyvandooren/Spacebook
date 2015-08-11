class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(create_user_params)
    if @user.save
      sign_in(@user)
      redirect_to "#/profile/#{@user.id}"
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to landing_url
    end
  end

  private
  def create_user_params
    params.require(:user).permit(:username, :password )
  end
end
