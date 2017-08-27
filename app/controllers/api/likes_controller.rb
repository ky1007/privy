class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    @entry = @like.entry

    if @like.save
      render 'api/entries/show'
    else 
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(
      entry_id: params[entry_id],
      user_id: current_user.id,
    )
    
    @entry = @like.entry

    if @like.destroy
      render 'api/entries/show'
    else
      render json: ["Couldn't find the like you're trying to dstroy"], status: 404
    end
  end

  private
  def like_params
    params.require(:like).permit(:entry_id)
end
