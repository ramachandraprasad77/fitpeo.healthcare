import React from "react";
import {
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
    <div className="fixed left-0 top-0 w-60 h-screen pt-20 bg-white shadow-md flex flex-col justify-between z-40">
      <div>
        <div className="px-6 py-2 text-xs text-gray-400 uppercase">General</div>
        {navItems.map((item, index) => {
          const showSectionTitle =
            index > 0 && navItems[index - 1].section !== item.section;

          return (
            <div key={index}>
              {showSectionTitle && (
                <div className="px-6 py-2 text-xs text-gray-400 uppercase">
                  {item.section}
                </div>
              )}
              <div
                className={`flex items-center gap-3 px-6 py-2 cursor-pointer text-sm ${
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

      <div className="mb-6 px-6">
        <div className="flex items-center gap-3 text-gray-500 hover:text-blue-600 cursor-pointer text-sm">
          <FaCog />
          <span>Setting</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
