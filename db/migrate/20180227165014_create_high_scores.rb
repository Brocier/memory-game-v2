class CreateHighScores < ActiveRecord::Migration[5.1]
  def change
    create_table :high_scores do |t|
      t.integer :score
      t.references :user, foreign_key: true
      t.references :game, foreign_key: true

      t.timestamps
    end
  end
end