class Api::EntriesController < ApplicationController
  def index
    if params[writerId]
      @entries = Entry.where(writer_id: params[writerId])
      render :index
    elsif params[latest_entries]
      # QUESTION: show to return a certain number the most recent of entries
      @entries = Entry.all
      render :index
    else
      # QUESTION: how to limit number of entries returned per request? 
      @entries = Entry.all
      render :index
    end

    # note: don't forget to write error messages 
  end

  def show
    @entry = Entry.find_by(id: params[:id])
    if @entry
      render :show
    else 
      render json: ['Entry not found'], stauts: 422
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
    @entry = Entry.find_by(id: params[:id])
    if @entry.update_attributes(entry_params)
      render :show
    elsif @entry
      render json: @entry.errors.full_messages, status: 422
    else 
      render json: ['Entry not found'], status: 404
    end
      
  end

  def destroy
    @entry = Entry.find_by(id: params[:id])
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
