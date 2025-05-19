import { useState } from "react";
import { FaSearch, FaStore } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { TfiSplitV } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { dummyUsers } from "../../../dummydata/user";
import Navbar from "../components/Navbar";

export default function SendPage() {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const filteredUsers = dummyUsers.filter(
    (user) =>
      user.username.toLowerCase().includes(inputValue.toLowerCase()) ||
      user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleNext = () => {
    if (inputValue.length > 5) {
      navigate("/make-payment", {
        state: { username: inputValue },
      });
    }
  };

  const handleSelectUser = (user) => {
    setInputValue(user.username);
    setShowSuggestions(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex flex-col items-start">
        <div className="w-full shadow-md mb-14 mt-5">
          <div className="pb-6 lg:px-28 px-7">
            <div className="w-24 font-bold text-md">
              <h1 className="px-4 py-3 flex justify-center border-b-2 border-black">
                Send
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:px-36 px-8 w-full relative">
          <h1 className="text-2xl sm:text-2xl font-bold mb-8">
            Send payment to
          </h1>

          {/* Search Input */}
          <div
            className={`flex items-center w-full max-w-xl px-4 py-5 rounded-full border border-gray-300 ${
              isFocused ? "outline-2 outline-[#0070E0] outline-offset-2" : ""
            } bg-white shadow-sm transition-all relative`}
          >
            <FaSearch className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Name, username, email, mobile"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => {
                setIsFocused(true);
                setShowSuggestions(true);
              }}
              onBlur={() => {
                setIsFocused(false);
                setTimeout(() => setShowSuggestions(false), 150); // delay so click can register
              }}
              className="w-full bg-transparent outline-none text-base text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && filteredUsers.length > 0 && (
            <ul className="absolute bg-white shadow-lg rounded-md mt-2 max-w-xl w-full z-10">
              {filteredUsers.map((user) => (
                <li
                  key={user.username}
                  className="flex items-center gap-3 px-4 py-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelectUser(user)}
                >
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-[#2663e6] flex items-center justify-center text-white">
                      <FaStore className="text-md" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-[#001435]">
                      {user.name}
                    </p>
                    <p className="text-xs">@{user.username}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={inputValue.length <= 5}
            className={`mt-10 px-8 py-2.5 rounded-full border-2 font-bold text-md ${
              inputValue.length > 5
                ? "text-white bg-[#0070E0] border-[#0070E0] cursor-pointer"
                : "text-gray-300 border-gray-300 bg-[#f6f7f8] cursor-not-allowed"
            }`}
          >
            Next
          </button>

          {/* Show All Contacts */}
          <p className="text-[#0070E0] font-medium mt-6 text-md underline cursor-pointer">
            Show all contacts
          </p>

          {/* More Options */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">More options</h2>
            <div className="space-y-6">
              {/* Pool money */}
              <div className="flex items-center space-x-4 hover:cursor-pointer">
                <PiUsersThree className="text-3xl text-[#001435]" />
                <p className="text-lg font-medium text-[#001435]">Pool money</p>
              </div>

              {/* Split a bill */}
              <div className="flex items-center space-x-4 hover:cursor-pointer">
                <TfiSplitV className="text-3xl text-[#001435]" />
                <p className="text-lg font-medium text-[#001435]">
                  Split a bill
                </p>
              </div>

              {/* Gift card */}
              <div className="flex items-center space-x-4 hover:cursor-pointer">
                <GoGift className="text-3xl text-[#001435]" />
                <p className="text-lg font-medium text-[#001435]">
                  Send a digital gift card
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
