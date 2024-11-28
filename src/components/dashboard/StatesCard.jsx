import React from "react";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const StatesCard = ({ data, dataLoading }) => {
  const cardData = [
    {
      id: 1,
      title: "Top Location",
      value: data?.topLocation?.count || "N/A",
      icon: <FaMapMarkerAlt size={18} />,
    },
    {
      id: 2,
      title: "Least Location",
      value: data?.leastLocation?.count || "N/A",
      icon: <IoIosArrowDown size={18} />,
    },
    {
      id: 3,
      title: "Most Joined Month",
      value: data?.mostJoinedMonth || "N/A",
      icon: <FaRegCalendarAlt size={18} />,
    },
    {
      id: 4,
      title: "Least Joined Month",
      value: data?.leastJoinedMonth || "N/A",
      icon: <IoIosArrowUp size={18} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData?.map((card) => (
        <div
          key={card?.id}
          className="bg-white border rounded-lg p-5 h-[100px] flex items-center gap-4 "
        >
          <div className="p-3 border-2 border-[#c00000] text-[#c00000] rounded-full">
            {card?.icon}
          </div>
          <div>
            <h3 className="text-gray-700 text-[15px] font-semibold">
              {card?.title}
            </h3>
            {dataLoading ? (
              <div className="text-gray-400  animate-pulse">0...</div>
            ) : (
              <p className="text-[18px] font-bold text-[#c00000]">
                {card?.value}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatesCard;
