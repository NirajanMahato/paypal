import { BsCheck2Circle } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { amount, currency, username } = location.state || {};

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-4">
        <BsCheck2Circle className="text-green-500 text-9xl mb-6" />

        <p className="text-2xl text-gray-700 mb-8">
          You have sent{" "}
          <span className="">
            {parseFloat(amount).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}{" "}
            USD
          </span>{" "}
          to <span className="">@{username}</span>
        </p>

        <button
          onClick={() => navigate("/send")}
          className="bg-[#002C8A] text-white px-10 py-3 rounded-full font-semibold text-md mb-4 hover:cursor-pointer"
        >
          Send more money
        </button>

        <button
          onClick={() => navigate("/")}
          className="text-xl text-blue-600 underline hover:cursor-pointer"
        >
          Home
        </button>
      </div>
      <Footer />
    </>
  );
}
