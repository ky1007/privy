Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :show]
    resources :entries, only: [:index, :show, :create, :update, :destroy]
    resources :goals, only: [:index, :show, :create, :update, :destroy]
    resources :reflections, only: [:index, :create, :destroy]
    resources :follows, only: [:create, :index]
    resources :likes, only: [:create, :destroy]
    delete 'follows', to: 'follows#destroy' 
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end