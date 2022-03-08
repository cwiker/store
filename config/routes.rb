Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'
  resources :product_categories
  resources :order_items
  resources :orders
  resources :categories
  resources :products
  resources :users
  post '/login', to: 'auth#create'
  post '/signup', to: 'users#create'
  get '/profile', to: 'users#profile'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
