Rails.application.routes.draw do
  root to: "static_pages#root"
  get "landing" => "static_pages#landing", as: "landing"
  get "session/guest_signin" => "sessions#guest_signin", as: "guest_signin"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :static_pages, only: [:landing]

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :invitations, only: [:index, :show, :create, :destroy]
    resources :friendships, only: [:index, :create]
    resources :notifications, only: [:index, :create, :update, :show]
  end
end
