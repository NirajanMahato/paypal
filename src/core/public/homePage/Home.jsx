import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCard } from "react-icons/io5";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FeatureCarousel from "../components/FeatureCarousel";

const HomePage = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 lg:flex gap-6  min-h-screen">
        {/* Left Section */}
        <div className="flex-1 space-y-6 mt-6">
          <FeatureCarousel/>

          {/* Setup & Activity */}
          <div className="space-y-4 pl-20">
            {/* Setup Account */}
            <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-center space-x-4">
              {/* Circular Progress */}
              <div className="relative w-12 h-12">
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
                See when money comes in, and when it goes out. You’ll find your
                recent PayPal activity here.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[42%] bg-white space-y-4 pr-20 pt-6 pl-2">
          <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between">
              <h4 className="font-bold text-xl mb-2">Cards</h4>
              <div className="text-xl text-gray-600">
                <BsThreeDotsVertical />
              </div>
            </div>
            <div className="flex items-start mt-2">
              <div className="text-[#4e5255] text-3xl mr-3 mt-5">
                <IoCard />
              </div>
              <p className="text-lg font-medium mb-2">
                Shop and send payments more securely. Link your credit card now.
              </p>
            </div>
            <a
              href="#"
              className="text-xl text-[#0070E0] font-bold  hover:underline"
            >
              Link a card
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
