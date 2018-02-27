class Game < ApplicationRecord
  has_many :scores, dependent: :destroy
  has_many :users, through: :scores
end
