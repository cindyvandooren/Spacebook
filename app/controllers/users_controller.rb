class UsersController < ApplicationController
  def create
    @user = User.new(create_user_params)
    if @user.save
      sign_in(@user)
      redirect_to root_url
      # redirect_to "#/profiles/#{@user.id}"
    else
      flash[:errors] = ["Invalid credentials. Please try again."]
      redirect_to landing_url
    end
  end

  private
  def create_user_params
    params.require(:user).permit(:username, :password )
  end
end
