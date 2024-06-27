import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartComponent = ({ revenue }) => {
  return (
    <div className="h-[227px] border rounded-xl p-6 flex flex-col gap-4 justify-between">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="font-semibold text-base">Total Revenue</p>
          <p className="uppercase font-medium text-[#5C5F6A] text-xs">
            This Year
          </p>
        </div>

        <p className="text-lg font-bold">$1256</p>
      </div>
      <div className="w-full h-[140px] flex justify-start items-start">
        {" "}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={revenue}>
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#c00000"
              strokeWidth={2}
            />
            <XAxis dataKey="month" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartComponent;
