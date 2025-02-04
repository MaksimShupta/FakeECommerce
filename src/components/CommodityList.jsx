import { fetchGoods } from "../network";
import CommodityCard from "./CommodityCard";

let items;

const CommodityList = async () => {
  try {
    const lstItems = await fetchGoods();
    items = lstItems;
    console.log("Commodity list: ", items);
  } catch (error) {
    console.log("Error --------- !!!!!!!!!!!!!!!!!!!!!!! ----------");
    console.error(error);
  }

  return (
    <div
      id="items-list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
    >
      {items.map((item) => (
        <CommodityCard key={item.id} />
      ))}
      ;
    </div>
  );
};

export default CommodityList;
