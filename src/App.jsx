import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./styles/global.css";
const App = () => {
  return (
    <div className="bg-gray-100 h-screen overflow-hidden">
      <Sidebar />
      <Header />

      <div className="pt-20 pl-60 h-full overflow-auto">
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
