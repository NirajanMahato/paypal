import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeatureCarousel = () => {
  const [slide, setSlide] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = () => setSlide(1);
  const handleBack = () => setSlide(0);

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      if (slide < 1) handleNext();
    }

    if (touchEnd - touchStart > 100) {
      // Swipe right
      if (slide > 0) handleBack();
    }
  };

  return (
    <div
      className="relative min-h-[480px] flex items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Mobile Scrollable Container */}
      <div className="md:hidden w-full px-4 overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex flex-nowrap gap-4 pb-6 snap-x snap-mandatory">
          {/* Pay Someone - Mobile */}
          <div className="bg-[#1040C1] min-w-72 w-72 h-[390px] text-white rounded-xl px-6 pb-6 pt-2 space-y-4 flex-shrink-0 snap-center">
            <div className="flex justify-center">
              <img src="/Logo/object1.png" alt="PayPal" className="w-56" />
            </div>
            <div className="text-3xl font-semibold">Pay someone</div>
            <p className="text-lg font-medium -mt-1">
              Pay for things that you bought or a service you received.
            </p>
            <Link to="/send">
              <button className="bg-white w-full mt-6 px-4 py-2 rounded-full font-bold text-lg text-blue-900 border-2 border-blue-900 hover:cursor-pointer">
                Send Money
              </button>
            </Link>
          </div>

          {/* Get Paid - Mobile */}
          <div className="bg-[#001C64] min-w-72 w-72 h-[390px] text-white rounded-xl px-6 pb-6 pt-2 space-y-4 flex-shrink-0 snap-center">
            <div className="flex justify-center">
              <img src="/Logo/object2.png" alt="PayPal" className="w-56" />
            </div>
            <div className="text-3xl font-semibold">Get paid</div>
            <p className="text-lg font-medium -mt-1">
              Get paid for selling something or for the work you did.
            </p>
            <button className="bg-white w-full mt-6 px-4 py-2 rounded-full font-bold text-lg text-blue-900 border-2 border-blue-900 hover:cursor-pointer">
              Request Money
            </button>
          </div>

          {/* Add Card - Mobile */}
          <div className="bg-[#7A29DC] min-w-72 w-72 h-[390px] text-white rounded-xl px-6 pb-6 pt-4 space-y-4 flex-shrink-0 snap-center">
            <img src="/Logo/object3.png" alt="Card" className="w-56 mx-auto" />
            <h3 className="text-2xl font-bold leading-snug">
              Add a card to shop the world
            </h3>
            <p className="text-base">
              Buy with confidence with your card info secure.
            </p>
            <button className="bg-white text-[#003087] font-bold text-lg w-full px-4 py-2 mt-4 rounded-full border-2 border-[#003087]">
              Add to your Wallet
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Animation Card Container */}
      <div className="hidden md:flex gap-6 transition-all duration-500 relative">
        {/* Slide 0 View */}
        {slide === 0 && (
          <>
            {/* Pay Someone */}
            <div className="bg-[#1040C1] w-72 h-[390px] text-white rounded-xl px-6 pb-6 pt-2 space-y-4 flex-shrink-0 relative hover:cursor-pointer">
              <div className="flex justify-center">
                <img src="/Logo/object1.png" alt="PayPal" className="w-56" />
              </div>
              <div className="text-3xl font-semibold">Pay someone</div>
              <p className="text-lg font-medium -mt-1">
                Pay for things that you bought or a service you received.
              </p>
              <Link to="/send">
                <button className="bg-white w-full mt-6 px-4 py-2 rounded-full font-bold text-lg text-blue-900 border-2 border-blue-900 hover:cursor-pointer">
                  Send Money
                </button>
              </Link>
            </div>

            {/* Get Paid */}
            <div
              className="bg-[#001C64] w-72 h-[390px] text-white rounded-xl px-6 pb-6 pt-2 space-y-4 flex-shrink-0 relative overflow-hidden hover:cursor-pointer"
              onMouseEnter={() => setShowArrow(true)}
              onMouseLeave={() => setShowArrow(false)}
            >
              <div className="flex justify-center">
                <img src="/Logo/object2.png" alt="PayPal" className="w-56" />
              </div>
              <div className="text-3xl font-semibold">Get paid</div>
              <p className="text-lg font-medium -mt-1">
                Get paid for selling something or for the work you did.
              </p>
              <button className="bg-white w-full mt-6 px-4 py-2 rounded-full font-bold text-lg text-blue-900 border-2 border-blue-900 hover:cursor-pointer">
                Request Money
              </button>

              {showArrow && (
                <button
                  onClick={handleNext}
                  className="absolute right-[8px] top-1/2 transform -translate-y-1/2 bg-white text-[#003087] text-lg p-3 rounded-full shadow-md z-10 hover:cursor-pointer"
                >
                  <FaArrowRight />
                </button>
              )}
            </div>
          </>
        )}

        {/* Slide 1 View */}
        {slide === 1 && (
          <div className="relative">
            <div className="bg-[#7A29DC] w-80 h-[420px] text-white rounded-xl px-6 pb-6 pt-4 space-y-4 flex-shrink-0 relative hover:cursor-pointer">
              <img
                src="/Logo/object3.png"
                alt="Card"
                className="w-56 mx-auto"
              />
              <h3 className="text-2xl font-bold leading-snug">
                Add a card to shop the world
              </h3>
              <p className="text-base">
                Buy with confidence with your card info secure.
              </p>
              <button className="bg-white text-[#003087] font-bold text-lg w-full px-4 py-2 mt-4 rounded-full border-2 border-[#003087]">
                Add to your Wallet
              </button>
            </div>

            {/* Left Arrow Button */}
            <button
              onClick={handleBack}
              className="absolute left-[-24px] top-1/2 transform -translate-y-1/2 bg-white text-[#003087] text-lg p-3 rounded-full shadow-md z-10 hover:cursor-pointer"
            >
              <FaArrowLeft />
            </button>
          </div>
        )}
      </div>

      {/* Dots - Only visible on desktop */}
      <div className="hidden md:flex absolute bottom-3 space-x-2 mt-4">
        <button
          onClick={() => setSlide(0)}
          className={`w-2 h-2 rounded-full transition ${
            slide === 0 ? "bg-[#0070E0]" : "bg-[#d0d0d0]"
          }`}
        ></button>
        <button
          onClick={() => setSlide(1)}
          className={`w-2 h-2 rounded-full transition ${
            slide === 1 ? "bg-[#0070E0]" : "bg-[#d0d0d0]"
          }`}
        ></button>
      </div>

      {/* Mobile Indicator Dots */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-3">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => {
              const scrollElement = document.querySelector(".snap-x"); // container div
              if (scrollElement) {
                scrollElement.scrollTo({
                  left: i * 288, // 72 * 4 = 288px (min-w-72 is ~18rem)
                  behavior: "smooth",
                });
              }
            }}
            className={`w-2 h-2 rounded-full ${
              i === 0 ? "bg-[#0070E0]" : "bg-[#d0d0d0]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
