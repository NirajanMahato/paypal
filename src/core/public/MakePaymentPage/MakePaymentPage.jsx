import { useState } from "react";
import { FaSpinner, FaStore } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { dummyUsers } from "../../../dummydata/user";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MakePaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || "unknown_user";

  const [loading, setLoading] = useState(false);

  const user = dummyUsers.find((u) => u.username === username) || {
    name: "Unknown",
    avatar: "/Logo/default-avatar.png",
  };

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [note, setNote] = useState("");

  const currencies = ["EUR", "USD", "INR", "JPY", "GBP"];
  const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    INR: 83.5,
    JPY: 156.4,
    GBP: 0.79,
  };
  const getConvertedAmount = () => {
    const base = parseFloat(amount);
    if (!base || isNaN(base)) return "0.00";
    const rate = exchangeRates[currency] || 1;
    return (base * rate).toFixed(2);
  };

  const handleNext = () => {
    if (amount && parseFloat(amount) > 0) {
      navigate("/loading", {
        state: {
          username,
          amount,
          currency,
        },
      });
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="min-h-screen bg-white flex justify-center items-center flex-col px-4">
          <div className="w-full max-w-xl border lg:mt-10 border-gray-300 rounded-xl lg:px-12 px-7 lg:py-8 py-6 mb-3">
            {/* User Info */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-[#2663e6] flex items-center justify-center text-white">
                  <FaStore className="text-xl" />
                </div>
              )}
              <div>
                <p className="font-bold text-2xl">{user.name}</p>
                <p className="">@{username}</p>
              </div>
            </div>

            {/* Amount Section */}
            <div className="mb-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 mb-1">You send</p>

                <div className="flex">
                  {/* Amount Display (click to edit) */}
                  <span className="text-4xl">$</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={amount}
                    onChange={(e) => {
                      // Remove any characters except numbers and dot
                      const value = e.target.value.replace(/[^0-9.]/g, "");
                      setAmount(value);
                    }}
                    placeholder="0.00"
                    className="text-4xl font-semibold text-gray-900 w-full max-w-xs bg-transparent outline-none border-none focus:ring-0 focus:outline-none placeholder-black"
                    style={{ appearance: "none" }}
                  />
                </div>
              </div>

              <span className="text-gray-500 font-medium">USD</span>
            </div>

            <hr className="my-4" />

            {/* Recipient Section */}
            <div className="mb-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Recipient gets</p>
                <p className="text-3xl font-semibold text-gray-900">
                  {currency === "EUR"
                    ? "€"
                    : currency === "INR"
                    ? "₹"
                    : currency === "JPY"
                    ? "¥"
                    : currency === "GBP"
                    ? "£"
                    : "$"}
                  {getConvertedAmount()}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Please enter amount to see exchange rate
                </p>
              </div>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="border text-sm px-2 py-1 rounded-md shadow-sm"
              >
                {currencies.map((cur) => (
                  <option key={cur} value={cur}>
                    {cur}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What’s this for?"
              className="w-full border border-gray-300 mt-4 rounded-md px-3 py-5 text-sm resize-none"
            />
          </div>
          <div>
            {/* Footer Text */}
            <p className="text-sm text-center text-gray-500 mb-6 font-medium">
              For more information please read our{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                user agreement
              </span>
              .
            </p>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={!amount || parseFloat(amount) <= 0 || loading}
              className={`w-full px-8 py-3 rounded-full font-bold text-md flex items-center justify-center hover:cursor-pointer ${
                !amount || parseFloat(amount) <= 0 || loading
                  ? "text-gray-300 border-2 border-gray-300 bg-[#f6f7f8] cursor-not-allowed"
                  : "text-white bg-[#0070E0] border-2 border-[#0070E0] hover:bg-[#005bb5]"
              }`}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                "Next"
              )}
            </button>

            {/* Cancel */}
            <p
              className="mt-4 text-md font-medium text-blue-600 text-center cursor-pointer underline"
              //   onClick={handleCancel}
            >
              Cancel
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
