import React, { useState } from "react";
import {
  FaBars,
  FaThLarge,
  FaHistory,
  FaCalendarAlt,
  FaStethoscope,
  FaChartBar,
  FaComments,
  FaPhone,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: <FaThLarge />, section: "General", active: true },
    { label: "History", icon: <FaHistory />, section: "General" },
    { label: "Calendar", icon: <FaCalendarAlt />, section: "General" },
    { label: "Appointments", icon: <FaStethoscope />, section: "General" },
    { label: "Statistics", icon: <FaChartBar />, section: "General" },
    { label: "Chat", icon: <FaComments />, section: "Tools" },
    { label: "Support", icon: <FaPhone />, section: "Tools" },
  ];

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden fixed top-24 left-4 z-[9999] text-2xl text-blue-300"
        >
          <FaBars />
        </button>
      )}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-40 bg-white shadow-md z-50 pt-20 px-4 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block`}
      >
        <div>
          <div className="py-2 text-xs text-gray-400 uppercase">General</div>
          {navItems.map((item, index) => {
            const showSectionTitle =
              index > 0 && navItems[index - 1].section !== item.section;

            return (
              <div key={index}>
                {showSectionTitle && (
                  <div className="py-2 text-xs text-gray-400 uppercase">
                    {item.section}
                  </div>
                )}
                <div
                  className={`flex items-center gap-2 py-2 cursor-pointer text-sm ${
                    item.active ? "text-blue-700 font-semibold" : "text-gray-500"
                  } hover:text-blue-600`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-6 mt-8">
          <div className="flex items-center gap-2 text-gray-500 hover:text-blue-600 cursor-pointer text-sm">
            <FaCog />
            <span>Setting</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;