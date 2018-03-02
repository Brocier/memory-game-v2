class Api::ScoresController < ApplicationController

    def index
      @scores = Score.all
      render json: @scores
    end
  
    def create
      # @score = Score.create!( score_params )

      @game = Game.first

      @score = Score.create!({
        user_id: params[:user],
        game: @game,
        score: 1
      })
  
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
