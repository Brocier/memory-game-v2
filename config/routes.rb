Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :scores
    end
  end
  namespace :api do
    resources :games do
      resources :scores
    end
  end
  namespace :api do
    resources :scores
  end
end
