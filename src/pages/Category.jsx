import { fetchGoods } from "../network";
import CommodityCard from "./CommodityCard";
import { useState, useEffect } from "react";

//let items;

const Category = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lstItems = await fetchGoods(); // Fetch the data
        // const categoryItems = lstItems.map((item)=> item===);
        //setItems(categoryItems); // Update the state with the fetched items
      } catch (error) {
        console.error("Error fetching goods:", error);
        //setError(error); // Set the error state if something goes wrong
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div
      id="items-list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
    >
      {items.map((item) => (
        <CommodityCard key={item.id} item={item} />
      ))}
      ;
    </div>
  );
};

export default Category;
