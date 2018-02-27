class User < ApplicationRecord
  has_many :scores, dependent: :destroy
  has_many :games, through: :scores
end
