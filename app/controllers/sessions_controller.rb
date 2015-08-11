class SessionsController < ApplicationController
  def new
    render "static_pages#landing"
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      redirect_to root_url
      # redirect_to "#/profiles/#{user.id}"
    else
      flash[:errors] = ["Invalid credentials, please try again."]
      redirect_to "static_pages#landing"
    end
  end

  def destroy
    sign_out
    redirect_to "static_pages#landing"
  end
end
