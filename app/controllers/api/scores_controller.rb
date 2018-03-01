class Api::ScoresController < ApplicationController

    def index
      @scores = Game.find(params[:game_id]).scores
      render json: @scores
    end
  
    def create
      @score = Score.create!( score_params )
  
      render json: @score
    end
  
    def show
      @score = Score.find(params[:id])
  
      render json: @score
    end
  
    def update
      @score = Score.find(params[:id])
      @score.update!(score_params)
  
      render json: @score
    end
  
    def destroy
      @score = Score.find(params[:id]).destroy
  
      render status: :ok
    end
  
    private
  
    def score_params
      params.require(:score).permit(:score, :game_id, :user_id)
    end
  

  
end
