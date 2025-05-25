import React from "react";
import { FaTooth } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";

const CalendarView = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md w-full">
      <div className="flex justify-between items-center mb-4 text-gray-800 font-semibold">
        <span>October 2021</span>
        <div className="flex gap-2 text-lg">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-2 mb-6">
        <div></div>
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, idx) => (
          <div key={idx} className="text-center font-medium text-sm text-gray-600">
            {day}
          </div>
        ))}

        {[10, 11, 12, 13, 14, 15, 16].map((hour, rowIdx) => (
          <React.Fragment key={hour}>
            <div className="text-sm text-gray-500 flex items-center">{`${hour}:00`}</div>

            {Array(7)
              .fill(0)
              .map((_, colIdx) => {
                const slot = `${colIdx}-${rowIdx}`;
                const appointments = {
                  "1-0": { text: "09:00", active: true },
                  "2-1": { text: "11:00", active: true },
                  "5-0": { text: "12:00", active: true },
                  "6-0": { text: "09:00", active: true },
                };

                const data = appointments[slot];

                return (
                  <div
                    key={slot}
                    className={`text-xs text-center py-1 rounded-md ${
                      data?.active ? "bg-indigo-200 text-indigo-700 font-semibold" : "text-gray-400"
                    }`}
                  >
                    {data?.text || "-"}
                  </div>
                );
              })}
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-indigo-600 text-white p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-bold">Dentist</h3>
            <FaTooth className="text-white" />
          </div>
          <p className="text-sm">09:00 - 11:00</p>
          <p className="text-sm">Dr. Cameron Williamson</p>
        </div>

        <div className="bg-indigo-100 text-indigo-900 p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-bold">Physiotherapy Appointment</h3>
            <GiMuscleUp />
          </div>
          <p className="text-sm">11:00 - 12:00</p>
          <p className="text-sm">Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
