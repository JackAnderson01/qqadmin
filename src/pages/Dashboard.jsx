import React from "react";
import Summary from "../components/dashboard/Summary";
import BestSelling from "../components/dashboard/BestSelling";
import RecentTransactions from "../components/dashboard/RecentTransactions";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <Summary />
      <div className="w-full py-2 grid grid-cols-1  gap-4 ">
        <div className="w-full">
          {/* <RecentTransactions /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
