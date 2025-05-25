import React from "react";
import DashboardOverview from "./DashboardOverview";

const DashboardMainContent = () => {
  return (
    <div className="flex flex-col flex-grow bg-gray-100 p-6">
      <DashboardOverview />
    </div>
  );
};

export default DashboardMainContent;