class User < ApplicationRecord
  has_many :high_scores dependent: :destroy
  has_many :games through :high_scores
end
