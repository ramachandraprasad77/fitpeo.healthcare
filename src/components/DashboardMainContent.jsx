import React from "react";
import DashboardOverview from "./DashboardOverview";

const DashboardMainContent = () => {
  return (
    <div className="flex flex-col flex-grow bg-white p-105">
      <DashboardOverview />
    </div>
  );
};

export default DashboardMainContent;