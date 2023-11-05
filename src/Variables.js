export const URLCatsRandom = `https://api.thecatapi.com/v1/images/search?limit=10`;
export const API_KEY ="live_W0GYsQCN7CH6XA8BBQyW8WwqbO5Y8cIRMQesHAytWVrqXiDOxQvmCJ6D1qaoiwBG";
export const API_FAVORITE_CATS = "https://api.thecatapi.com/v1/favourites";
export const API_FAVORITE_CATS_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}`
export const catsContainer = document.querySelector(".cats");
export const favouritesContainer = document.querySelector(".likeCats")
export const API_VOTES = "https://api.thecatapi.com/v1/votes"
export const body = document.querySelector("body")