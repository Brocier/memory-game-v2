Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :high_scores
    end
  end
  namespace :api do
    resources :games do
      resources :high_scores
    end
  end
end
