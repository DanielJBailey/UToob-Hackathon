Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :users do
      resources :videos
    end
  end

  namespace :api do
      resources :videos
  end
  
end
