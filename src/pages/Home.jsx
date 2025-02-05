import CommodityList from "../components/CommodityList";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-6">E-Shop</h1>
        <CommodityList />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
