import React from "react";
import { FaSearch, FaBell, FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-20 bg-white flex justify-between items-center px-6 shadow-md z-50">
      <div className="text-2xl font-bold">
  <span className="bg-cyan-300 text-transparent bg-clip-text">Health</span>
  <span className="text-[#1a185a]">care.</span>
</div>
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 shadow-sm text-sm"
          readOnly
        />
        <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <FaBell className="text-xl text-gray-600" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/avatar.png"
            alt="User"
            className="rounded-full w-8 h-8 object-cover"
          />
          <span className="text-sm font-medium text-gray-800">Mr. Ram</span>
        </div>
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700">
          <FaPlus size={12} />
        </button>
      </div>
    </div>
  );
};

export default Header;
