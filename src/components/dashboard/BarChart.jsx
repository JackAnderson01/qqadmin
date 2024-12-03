import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from "recharts";
const BarChartComponent = ({ matches,matchescount }) => {

  return (
    <div className="h-[343px] border rounded-xl p-6 flex flex-col gap-4 justify-between">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="font-semibold text-base">Total Matches ({matchescount || 'N/A'}) </p>
          <p className="uppercase font-medium text-[#5C5F6A] text-xs">
            This Year 
          </p>
        </div>
        <div>
        </div>
      </div>
      <div className="w-full h-[140px] flex justify-start items-start">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={matches}>
            <Tooltip />
            <Bar dataKey="matches" fill="#c00000" />
            <XAxis dataKey="month" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartComponent;
