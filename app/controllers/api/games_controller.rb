class Api::GamesController < ApplicationController
  def index
    @games = Game.all
    render json: @games
  end

  def create
    @game = Game.create!(game_params)

    render json: @game
  end

  def show
    @game = Game.find(params[:id])

    render json: @game
  end

  def update
    @game = Game.find(params[:id])
    @game.update!(game_params)

    render json: @game
  end

  def destroy
    @game = Game.find(params[:id]).delete

    render status: :ok
  end

  private

  def game_params
    params.require(:game).permit(:details)
  end
end
