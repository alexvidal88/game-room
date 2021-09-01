Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "games#home"
  get "dice", to: "games#dice"
  get "drum", to: "games#drum"
end
