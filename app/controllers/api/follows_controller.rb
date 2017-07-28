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
    @follow = Follow.find_by(
      followee_id: (params[:follow][:followee_id]).to_i,
      follower_id: (params[:follow][:follower_id]).to_i
    )

    @user = User.find_by(id: @follow.followee_id.to_i)

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
