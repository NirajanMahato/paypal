import { useState } from "react";
import { FaBars, FaBell, FaCog, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Send", path: "/send" },
  { name: "Wallet", path: "/wallet" },
  { name: "Activity", path: "/activity" },
  { name: "Help", path: "/help" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "bg-[#27419A] px-4 py-3 rounded-full text-md font-medium text-white"
      : "px-4 py-3 rounded-full text-md font-medium text-[#D1F1FF] border border-transparent hover:border-gray-400 transition-colors duration-200 delay-[250ms]";

  return (
    <nav className="bg-[#002C8A] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/Logo/paypal-white-logo.png"
              alt="PayPal"
              className="w-9 mr-4"
            />
            <div className="hidden md:flex space-x-6 items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={navLinkClasses}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Icons and Logout */}
          <div className="hidden md:flex items-center space-x-5">
            <div className="relative">
              <FaBell className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
                2
              </span>
            </div>
            <FaCog className="text-xl" />
            <button className="text-sm font-medium text-[#D1F1FF]">
              LOG OUT
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.path} className={navLinkClasses}>
              {item.name}
            </NavLink>
          ))}
          <div className="flex items-center space-x-4 mt-4">
            <div className="relative">
              <FaBell className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
                2
              </span>
            </div>
            <FaCog className="text-xl" />
            <button className="text-sm font-medium">LOG OUT</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
