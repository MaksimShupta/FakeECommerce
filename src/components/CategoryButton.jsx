const CategoryButton = ({ cat }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 mt-2">
      {cat || "unknown category"}
    </button>
  );
};

export default CategoryButton;
