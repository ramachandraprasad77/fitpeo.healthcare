import React from "react";

const healthData = [
  { type: "Lungs", status: "Critical", date: "May 23, 2025", color: "text-red-500" },
  { type: "Teeth", status: "Checkup Required", date: "June 10, 2025", color: "text-yellow-500" },
  { type: "Bone", status: "Strong", date: "May 30, 2025", color: "text-blue-500" },
];

const HealthStatusCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      {healthData.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-lg font-semibold">{item.type}</h3>
          <p className={`font-medium ${item.color}`}>{item.status}</p>
          <p className="text-gray-500 text-sm">{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;