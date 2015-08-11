Rails.application.routes.draw do
  root to: "static_pages#root"
  get "static_pages/landing" => "static_pages#landing", as: "landing"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :static_pages, only: [:landing]
end
