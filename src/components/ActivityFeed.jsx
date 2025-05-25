import React from "react";

const ActivityFeed = () => {
  const weekData = [
    ["h-16 bg-cyan-400", "h-10 bg-gray-300", "h-20 bg-indigo-500"],
    ["h-24 bg-cyan-400", "h-16 bg-gray-300", "h-12 bg-indigo-500"],
    ["h-12 bg-indigo-500", "h-10 bg-cyan-400", "h-24 bg-gray-300"],
    ["h-20 bg-cyan-400", "h-10 bg-indigo-500", "h-24 bg-gray-300"],
    ["h-24 bg-cyan-400", "h-20 bg-indigo-500", "h-16 bg-gray-300"],
    ["h-12 bg-indigo-500", "h-10 bg-gray-300", "h-24 bg-cyan-400"],
    ["h-16 bg-gray-300", "h-20 bg-cyan-400", "h-10 bg-indigo-500"],
  ];

  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-[#f5f8ff] rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-blue-900">Activity</h2>
        <p className="text-sm text-gray-400">3 appointment on this week</p>
      </div>

      <div className="flex justify-between items-end h-40">
        {weekData.map((dayBars, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <div className="flex flex-col justify-end items-center gap-1 h-32">
              {dayBars.map((style, i) => (
                <div key={i} className={`w-1.5 rounded-md ${style}`} />
              ))}
            </div>
            <span className="text-xs text-gray-500 mt-1">{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
