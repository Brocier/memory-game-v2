class Api::HighScoresController < ApplicationController

    def index
      @high_scores = Game.find(params[:game_id]).high_scores
      render json: @high_scores
    end
  
    def create
      @high_score = High_Score.create!( high_score_params )
  
      render json: @high_score
    end
  
    def show
      @high_score = High_Score.find(params[:id])
  
      render json: @high_score
    end
  
    def update
      @high_score = High_Score.find(params[:id])
      @high_score.update!(high_score_params)
  
      render json: @high_score
    end
  
    def destroy
      @high_score = High_Score.find(params[:id]).delete
  
      render status: :ok
    end
  
    private
  
    def high_score_params
      params.require(:high_score).permit(:score, :game_id, :user_id)
    end
  

  
end
