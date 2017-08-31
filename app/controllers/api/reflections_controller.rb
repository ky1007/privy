class Api::ReflectionsController < ApplicationController
  def create
    @reflection = Reflection.new(ref_params)
    if @reflection.save
      render :show
    else 
      render json: @reflection.errors.full_messages, status: 422
    end
  end

  def index
    @reflections = Reflection.where(entry_id: params[:reflection][:entry_id])
    if @reflections
      render :index
    else
      render json: ['Could not find any reflections tied to that entry'], status: 404
    end
  end

  def destroy
    @reflection = current_user.reflections.find_by(id: params[:id])
    if @reflection.destroy
      render :show
    else
      render json: ["The reflection you're trying to delete cannot be found"], status: 404
    end
  end

  private
  def ref_params
    params.require(:reflection).permit(:body, :writer_id, :entry_id)
  end
end
