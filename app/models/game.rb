class Game < ApplicationRecord
  has_many :high_scores dependent: :destroy
  has_many :users through :high_scores
end
