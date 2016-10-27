Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :pokemon, only: [:show, :update, :destroy, :create, :index]
  end

  root to: 'static_pages#root'
end
