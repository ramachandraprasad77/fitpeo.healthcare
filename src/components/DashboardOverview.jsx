import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardOverview = () => {
  return (
    <div><div className="ml-14 mt-3 text-[#1f1c74] text-2xl font-bold">Dashboard</div>
    <div className="bg-white flex flex-col md:flex-row gap-2 mt-2">
      <div className="md:w-1/2 flex flex-col gap-2 items-center">
        <AnatomySection />
        <div className="w-full">
          <ActivityFeed />
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col gap-2">
        <div className="bg-gray-200 rounded-md">
          <CalendarView />
        </div>
        <div className="bg-gray-200 rounded-md">
          <UpcomingSchedule />
        </div>
      </div>
    </div>
    </div>
  );
};

export default DashboardOverview;
