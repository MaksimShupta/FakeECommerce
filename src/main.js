import { fetchGoods, apiConfig } from "./src/network.js";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveToCart = (goodId) => {
  localStorage.setItem(String(goodId), JSON.stringify(cart));
};

const isInTheCart = (element) => {
  return favorites.some((e) => e === element);
};

const getGoods = async () => {
  try {
    const response = await fetch(`${apiConfig.tmdbBaseUrl}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const fetchGoods = async () => {
  try {
    movies = (await getGoods()).results;
    displayMovies(""); // Display all movies on page load
  } catch (error) {
    console.error("Error fetching popular movies:", error);
  }
};
