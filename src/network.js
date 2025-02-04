export const apiConfig = {
  tmdbBaseUrl: "https://fakestoreapi.com/products/",
  imageBaseUrl: "https://fakestoreapi.com/products/image/",
};

export const fetchGoods = async () => {
  try {
    const res = await fetch(apiConfig.tmdbBaseUrl);
    if (!res.ok) {
      throw new Error(`${res.status}. Something went wrong`);
    }
    const data = await res.json();
    //console.log("Network: ", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
