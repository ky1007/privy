class FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render json: "api/entry/show"
    else 
      render json: @follow.errors.full_messages
    end
  end

  def destroy
    @follow = Follow.find_by(id: params[:id])
    if @follow.destroy
      render json: "api/entry/show"
    else
      render json: @follow.errors.full_messages
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:follower, :followee)
  end
end
