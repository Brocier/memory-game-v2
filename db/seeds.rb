User.destroy_all
Game.destroy_all
Score.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
  end

josh = User.create(name: 'Josh', image: 'https://i.imgur.com/XT6bwJI.jpg?1')
match = Game.create(details: 'Match cards')
Score.create(score: 100, user: josh, game: match)