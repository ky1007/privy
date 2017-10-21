class Api::EntriesController < ApplicationController
  def index
    if params[:username] # && params[:latest_entries]
      user = User.find_by(username: params[:username])
      @entries = user.entries.limit(10)
      render :index
    elsif params[:user_id] 
      @bookmarks = Bookmark.where(user_id: params[:user_id]).pluck(:entry_id)
      @entries = Entry.where(id: @bookmarks).limit(10)
      render :index
    else
      @entries = Entry.all.order(created_at: :desc).limit(10)
      render :index
    end
  end

  def show
    @entry = Entry.find_by(id: params[:id])
    if @entry
      render :show
    else 
      render json: ['Entry not found!'], stauts: 422
    end
  end

  def create
    @entry = Entry.new(entry_params)
    if @entry.save
      render :show
    else
      render json: @entry.errors.full_messages, status: 422
    end
  end

  def update
    @entry = current_user.entries.find_by(id: params[:id])
    if @entry.update_attributes(entry_params)
      render :show
    elsif @entry
      render json: @entry.errors.full_messages, status: 422
    else 
      render json: ['Entry not found'], status: 404
    end
      
  end

  def destroy
    @entry = current_user.entries.find_by(id: params[:id])
    if @entry.destroy 
      render :show
    elsif @entry
      render json: @entry.errors.full_messages, status: 422
    else
      render json: ['Entry not found'], status: 404
    end
  end

  private
  def entry_params
    params.require(:entry).permit(:title, :general, :gratitude, :improvements, :writer_id, :image_url, :public)
  end
end
