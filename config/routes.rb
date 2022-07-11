Rails.application.routes.draw do
  
  resources :nft_collections
  resources :comments, only: :create
  resources :likes, only: :create
  resources :nfts
  resources :users, only: [:show, :index, :create]

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get '/contact', to: 'contact#new'
  post '/contact', to: 'contact#create'
  get "/nfts_by_price", to: "nfts#nfts_by_price"
  get "/nfts_by_order", to: "nfts#order"
  get "/nfts_by_date", to: "nfts#nfts_by_date"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
