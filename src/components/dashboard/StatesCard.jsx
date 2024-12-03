import React from "react";
import { FaUsers, FaUserCheck, FaUserTimes, FaCalendarAlt } from "react-icons/fa";

const StatesCard = ({ data, dataLoading }) => {
  const cardData = [
    {
      id: 1,
      title: "Total Users",
      value: data?.allUsers || "N/A",
      icon: <FaUsers size={18} />,
      showName: true,
    },
    {
      id: 2,
      title: "Active Users",
      value: data?.activeUsers || "N/A",
      icon: <FaUserCheck size={18} />,
      showName: false,
    },
    {
      id: 3,
      title: "Deleted & Deactivated",
      value: data?.deletedOrDeactivatedUsers || "N/A",
      icon: <FaUserTimes size={18} />,
      showName: true,
    },
    {
      id: 4,
      title: "Least Joined Month",
      value: data?.leastJoinedMonth || "N/A",
      icon: <FaCalendarAlt size={18} />,
      showName: true,
    },
    {
      id: 5,
      title: "Most Joined Month",
      value: data?.mostJoinedMonth || "N/A",
      icon: <FaCalendarAlt size={18} />,
      showName: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {cardData?.map((card) => (
        <div
          key={card?.id}
          className="bg-white border rounded-lg p-3 h-[100px] flex items-center gap-4"
        >
          <div className="p-3 border-2 border-[#c00000] text-[#c00000] rounded-full">
            {card?.icon}
          </div>
          <div>
            <h3 className="text-gray-700 text-nowrap text-[13px] font-semibold">
              {card?.title}
            </h3>
            {dataLoading ? (
              <div className="text-gray-400 animate-pulse">0...</div>
            ) : (
              <div className="flex justify-between w-[170px]">
                <p className="text-[18px] font-bold text-[#c00000]">
                  {card?.value}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatesCard;
