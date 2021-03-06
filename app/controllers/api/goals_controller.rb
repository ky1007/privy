class Api::GoalsController < ApplicationController
  def index
    if params[:goal][:entry_id]
      @goals = Goal.where(entry_id: params[:goal][:entry_id])
    else
      @goals = Goal.all
    end
  end

  def show
    @goal = Goal.find_by(id: params[:id])
    if @goal
      render :show
    else
      render json: ["Couldn't find this goal, perhaps it was destroyed?"], status: 404
    end
  end

  def create
    @goal = Goal.new(goal_params)
    if @goal.save
      render :show
    else 
      render @goal.errors.full_messages
    end
  end

  def update
    @goal = Goal.find_by(id: params[:id])
    if @goal.update_attributes(goal_params)
      render :show
    elsif @goal
      render json: @goal.error.full_messages, status: 422
    else
      render json: ["The goal you're trying to update wasn't found. Perhaps it's already been deleted."], status: 404
    end
  end

  def destroy
    @goal = Goal.find_by(id: params[:id])
      if @goal.destroy
        render :show
      elsif @goal
        render json: @goal.error.full_messages#,  status: 
      else
        render json: ["The goal you're attempting to destroy was not found. Perhaps it's already been deleted."], status: 404
      end
  end

  private 
  def goal_params
    params.require(:goal).permit(:body, :done, :entry_id)
  end
end
