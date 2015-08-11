class SessionsController < ApplicationController
  before_action :sign_in_first, only: [:destroy]

  def new
    render "static_pages/landing"
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      redirect_to "#/users/#{@user.id}"
    else
      flash[:errors] = ["Invalid credentials, please try again."]
      redirect_to landing_url
    end
  end

  def destroy
    sign_out
    redirect_to landing_url
  end

  # def guest_login
  #   user = User.find()
  #   sign_in(user)
  #   redirect_to root_url
  # end
end
