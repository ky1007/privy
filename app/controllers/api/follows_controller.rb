class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      @user = User.find_by(id: @follow.followee_id)
      render "api/users/show"
    else 
      render json: @follow.errors.full_messages, status: 400
    end
  end

  def destroy
    @follow = Follow.where(
      followee_id: params[:follow][:followee_id],
      follower_id: params[:follow][:follower_id]
    ).first
    # find the user who was being followed
    @user = User.find_by(@follow.followee_id)

    if @follow.destroy
      render "api/users/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
