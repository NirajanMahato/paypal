import { OrbitProgress } from "react-loading-indicators";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LoadingScreen = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-white">
        <OrbitProgress color="#002C8A" size="large" text="" textColor="" />
      </div>
      <Footer />
    </>
  );
};

export default LoadingScreen;
