import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardOverview = () => {
  return (
    <div className=" bg-white flex">
      <div className="w-1/2 flex mt-2 gap-1 flex-col items-center bg-white">
        <AnatomySection />
        <div className="w-full mt-2 bg-white  rounded-md">
          <ActivityFeed />
        </div>
      </div>

      <div className="flex flex-col gap-1 w-1/2 bg-white">
        <div className="bg-gray-200 rounded-md">
          <CalendarView />
        </div>
        <div className="bg-gray-200 rounded-md">
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;