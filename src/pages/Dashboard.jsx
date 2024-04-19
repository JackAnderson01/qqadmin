import React from "react";
import Summary from "../components/dashboard/Summary";
import BestSelling from "../components/dashboard/BestSelling";
import RecentTransactions from "../components/dashboard/RecentTransactions";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <Summary />
      <div className="w-full py-2 grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-6">
        <div className="lg:col-span-2">
          <BestSelling />
        </div>
        <div className="lg:col-span-4">
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
