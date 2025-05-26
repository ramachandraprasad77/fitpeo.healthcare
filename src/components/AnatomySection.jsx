import React from "react";
import { FaLungs, FaTooth, FaBone } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import anatomyImg from "../assets/anatomy.png";

const healthData = [
  { type: "Lungs", status: "Good", date: "26 Oct 2021", level: 60 },
  { type: "Teeth", status: "Excellent", date: "26 Oct 2021", level: 90 },
  { type: "Bone", status: "Fair", date: "26 Oct 2021", level: 40 },
];

const AnatomySection = () => {
  return (
    <div className="flex flex-col p-5 bg-white rounded-2xl shadow-md max-w-6xl mx-auto">
      <div className="flex justify-end items-center mb-6">
        <div className="text-blue-700 font-medium">This Week</div>
      </div>
      <div className="flex flex-row gap-1">
        <div className="relative flex-1 bg-white rounded-xl p-6 flex justify-center items-center">
          <img
            src="/src/assets/anatomy.png"
            alt="Anatomy"
            className="w-auto min-w-[80px] max-w-[200px] object-contain"
          />

          <div className="absolute top-[25%] right-[2%] bg-indigo-600 text-white px-1 py-1 rounded-md flex items-center gap-1 shadow-md text-xs sm:text-sm w-max">
            <FaHeart className="text-xs sm:text-sm" /> Healthy Heart
          </div>
          <div className="absolute bottom-[28%] left-[2%] bg-cyan-400 text-white px-1 py-1 rounded-md flex items-center gap-1 shadow-md text-xs sm:text-sm w-max">
            💪 Healthy Leg
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          {healthData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl text-gray-700">
                  {item.type === "Lungs" && <FaLungs />}
                  {item.type === "Teeth" && <FaTooth />}
                  {item.type === "Bone" && <FaBone />}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{item.type}</div>
                  <div className="text-xs text-gray-400">Date: {item.date}</div>
                </div>
              </div>

              <div className="flex-1 ml-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      item.type === "Lungs"
                        ? "bg-red-400"
                        : item.type === "Teeth"
                        ? "bg-green-400"
                        : "bg-orange-400"
                    }`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-sm text-blue-600 text-right cursor-pointer">
        Details →
      </div>
    </div>
  );
};

export default AnatomySection;
