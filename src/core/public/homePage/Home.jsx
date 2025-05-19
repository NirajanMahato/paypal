import { BsThreeDotsVertical } from "react-icons/bs";
import FeatureCarousel from "../components/FeatureCarousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import visaCard from "/Logo/visa-card.png";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#f5f5f5]">
        {/* Navbar placeholder - actual component would be imported */}
        <div className="bg-white shadow-sm">
          <Navbar />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:flex flex-col lg:flex-row gap-6 min-h-screen">
          {/* Left Section */}
          <div className="flex-1 space-y-6">
            {/* PayPal Balance */}
            <FeatureCarousel />
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-semibold">
                    Paypal balance
                  </p>
                  <p className="lg:text-3xl text-2xl text-[#001435] mt-1">
                    2 365 193 777,98  $
                  </p>
                </div>
                <button className="mt-2 lg:px-6 px-3 py-2 lg:text-sm text-xs text-white border border-[#0070E0] bg-[#1040C1] rounded-full hover:bg-[#E6F0FA] transition">
                  Add Money
                </button>
              </div>
            </div>

            {/* Setup & Activity */}
            <div className="space-y-4 md:pl-4 lg:pl-20">
              {/* Setup Account */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-center space-x-4">
                {/* Circular Progress */}
                <div className="relative w-12 h-12 flex-shrink-0">
                  {/* Outer circle (gray) */}
                  <div className="w-full h-full rounded-full border-[3px] border-[#f0f0f0]"></div>
                  {/* Progress circle (blue) */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-[3px] border-[#003087] border-r-transparent rotate-[135deg]"></div>
                  {/* Text in center */}
                  <div className="absolute inset-0 flex items-center justify-center text-[#0070E0] text-sm font-medium">
                    3/4
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[17px] font-semibold text-[#001435]">
                    Set up your account
                  </h3>
                  <p className="text-sm font-medium">
                    Make it easier to use PayPal.
                  </p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h3 className="font-bold text-xl mb-1">Recent activity</h3>
                <p className="text-lg font-semibold mt-2">
                  See when money comes in, and when it goes out. You'll find
                  your recent PayPal activity here.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-2/5 bg-white space-y-4 p-4 md:p-6 lg:pr-20 lg:pt-6 lg:pl-2 mt-6 lg:mt-0">
            <div className="bg-white rounded-xl p-4 w-full space-y-4">
              {/* Header Row */}
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-xl text-[#001435]">Cards</h4>
                <BsThreeDotsVertical className="text-[#5c5f62] text-xl" />
              </div>

              {/* Card Item */}
              <div className="hover:bg-[#f4f2ef] rounded-sm flex items-center p-3 space-x-4 hover:cursor-pointer">
                <img
                  src={visaCard}
                  alt="Visa"
                  className="w-12 h-8 object-cover"
                />
                <div>
                  <p className="text-[#001435] text-lg font-semibold leading-tight">
                    Visa
                  </p>
                  <p className="text-[#001435] text-sm font-medium">
                    Debit ••••23
                  </p>
                </div>
              </div>

              {/* Link Card */}
              <a
                href="#"
                className="text-[#0070E0] font-bold text-lg hover:underline inline-block"
              >
                Link a card
              </a>
            </div>
          </div>
        </div>

        {/* Footer placeholder - actual component would be imported */}
        <div className="bg-[#001C64] text-white mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
