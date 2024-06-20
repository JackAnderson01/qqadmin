import React from "react";
import SummaryCard from "./SummaryCard";
import { summary } from "../../constants/DashboardSummary";
import BarChartComponent from "./BarChart";
import LineChartComponent from "./LineChart";

const Summary = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChartComponent />
        <LineChartComponent />
      </div>
    </div>
  );
};

export default Summary;
