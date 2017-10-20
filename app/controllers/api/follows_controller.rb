class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    
    if @follow.save
      @user = User.find_by(id: @follow.followee_id)
      render "api/follows/show"
    else 
      render json: @follow.errors.full_messages, status: 400
    end
  end

  def index
    @follows = Follow.where(follower_id: params[:id]).pluck(:followee_id)
    @entries = Entry.where(writer_id: @follows)
    render "api/entries/index"
  end

  def destroy
    @follow = Follow.find_by(
      followee_id: params[:follow][:followee_id],
      follower_id: current_user.id
    )

    @user = User.find_by(id: @follow.followee_id)

    if @follow.destroy
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
