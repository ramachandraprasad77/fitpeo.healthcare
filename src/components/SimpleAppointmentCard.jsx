import React from "react";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md flex items-center gap-4">
      <span className="text-2xl">{icon}</span>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;