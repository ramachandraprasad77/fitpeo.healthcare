import React from "react";

const upcomingAppointments = [
  {
    day: "On Thursday",
    appointments: [
      { title: "Health checkup complete", time: "11:00 AM", emoji: "💉" },
      { title: "Ophthalmologist", time: "14:00 PM", emoji: "👁️" },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      { title: "Cardiologist", time: "12:00 AM", emoji: "❤️" },
      { title: "Neurologist", time: "16:00 PM", emoji: "🧑‍⚕️" },
    ],
  },
];

const UpcomingSchedule = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-4">The Upcoming Schedule</h2>

      {upcomingAppointments.map((dayGroup, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-sm text-gray-500 font-semibold mb-3">{dayGroup.day}</h3>
          <div className="grid grid-cols-2 gap-4">
            {dayGroup.appointments.map((item, idx) => (
              <div
                key={idx}
                className="bg-indigo-100 text-indigo-800 rounded-xl px-4 py-3 flex flex-col shadow-sm"
              >
                <div className="flex justify-between items-center font-medium text-sm mb-1">
                  <span>{item.title}</span>
                  <span>{item.emoji}</span>
                </div>
                <div className="text-xs text-gray-600">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
