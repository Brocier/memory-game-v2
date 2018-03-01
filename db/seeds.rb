User.destroy_all
Game.destroy_all
Score.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
  end

matchEasy = Game.create(details: 'Match cards as quickly as possible', difficulty: 'SuperEasy - 4 Cards to match')

josh = User.create(name: 'Josh', image: 'https://i.imgur.com/B0KOrC1.jpg?2')
Score.create(score: 100, user: josh, game: matchEasy)

beth = User.create(name: 'Beth', image: 'https://i.imgur.com/1ruSz1K.jpg')
Score.create(score: 10000, user: beth, game: matchEasy)

caleb = User.create(name: 'Caleb', image: 'https://i.imgur.com/mEaMhP7.jpg')
Score.create(score: 3, user: caleb, game: matchEasy)