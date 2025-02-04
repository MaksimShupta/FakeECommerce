const CommodityCard = ({ product }) => {
  return (
    <div className="border p-4 rounded">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2">
        Add to Cart
      </button>
    </div>
  );
};
