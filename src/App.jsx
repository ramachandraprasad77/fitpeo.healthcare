import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./styles/global.css";
import { FaBars } from "react-icons/fa";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen relative">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-2 z-50 text-3xl text-blue-950"
      >
        ☰
      </button>

      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="pl-0 md:pl-60">
        <Header />
      </div>

      <div
        className={`pt-20 transition-all duration-300 ${
          sidebarOpen ? "pl-0" : "pl-0 md:pl-44"
        }`}
      >
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
