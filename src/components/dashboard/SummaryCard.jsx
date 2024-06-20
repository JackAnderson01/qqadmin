import React from "react";
import { ProgressBar2, ProgressBar3 } from "../../assets/export";

const SummaryCard = ({ summary }) => {
  return (
    <div className="h-[227px] border rounded-xl p-6 flex flex-col justify-between">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="font-semibold text-base">{summary?.title}</p>
          <p className="uppercase font-medium text-[#5C5F6A] text-xs">
            {summary?.timing}
          </p>
        </div>
        {summary?.title == "Total Revenue" && (
          <p className="text-lg font-bold">${summary?.count}</p>
        )}
      </div>
      {summary?.title == "Total Revenue" && <img src={summary?.image} alt="" />}
      {summary?.title == "Total Matches" && <img src={summary?.image} alt="" />}

      {summary?.title == "Users" && (
        <>
          <div className="w-full flex flex-col justify-start items-start gap-[2px]">
            <h1 className="text-gray-700 tracking-wider text-xs">
              Silver plan
            </h1>
            <img src={summary?.image} alt="" className="w-full h-[6px]" />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-[2px]">
            <h1 className="text-gray-700 tracking-wider text-xs">Gold plan</h1>
            <img src={summary?.image} alt="" className="w-full h-[6px]" />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-[2px]">
            <h1 className="text-gray-700 tracking-wider text-xs">Other plan</h1>
            <img src={summary?.image} alt="" className="w-full h-[6px]" />
          </div>
        </>
      )}
    </div>
  );
};

export default SummaryCard;
