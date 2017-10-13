class Api::BookmarksController < ApplicationController
  def create
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.user_id = current_user.id
    @entry = @bookmark.entries

    if @bookmark.save
      render 'api/entries/show'
    else 
      render json: @bookmark.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookmark = bookmark.find_by(
      entry_id: params[entry_id],
      user_id: current_user.id,
    )
    
    @entry = @bookmark.entry

    if @bookmark.destroy
      render 'api/entries/show'
    else
      render json: ["Couldn't find the bookmark you're trying to dstroy"], status: 404
    end
  end

  private
  def bookmark_params
    params.require(:bookmark).permit(:entry_id)
  end
end
