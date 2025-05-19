import { useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/success", { state });
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate, state]);

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

export default LoadingPage;
