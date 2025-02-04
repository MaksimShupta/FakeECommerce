import { useState } from "react";
import CommodityList from "./components/CommodityList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-6">E-Shop</h1>
        <CommodityList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
