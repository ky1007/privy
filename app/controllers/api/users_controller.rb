class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.where(id: params[:id])
    if @users
      render :index
    else 
      render json: ['No users found'], status: 404
    end
   end

  def show 
    @user = User.find_by(id: params[:id])
    if @user
      render 'api/users/show'
    else
      render json: ['No user found'], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
