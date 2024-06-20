import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const RecentTransactions = () => {
  const { navigate } = useContext(GlobalContext);
  return (
    <div className="w-full h-auto lg:h-[475px] border rounded-xl flex flex-col py-4 md:py-6">
      <div className="px-6 mb-6 w-full h-auto flex justify-between items-center">
        <p className="text-base font-semibold">Recent Transactions</p>

        <button
          className="w-24 h-10 rounded-full flex items-center justify-center bg-[#c00000] text-white text-sm font-medium"
          onClick={() => navigate("/revenue", "Revenue")}
        >
          View All
        </button>
      </div>
      <div className="border border-slate-200 rounded-xl"></div>
      <div className="w-full grid grid-cols-5 px-6 py-4">
        <p className="text-sm font-medium">User</p>
        <p className="text-sm font-medium">Date</p>
        <p className="text-sm font-medium">Recent Transaction</p>
        <p className="text-sm font-medium">Subscriptions Taken</p>
        <p className="text-sm font-medium">Total Revenue</p>
      </div>
      <div className="border border-slate-200 rounded-xl"></div>
      <div className="w-full grid grid-cols-5 px-6 py-4 border-b">
        <p className="text-sm font-medium">Simon</p>
        <p className="text-sm font-medium">24 Mar, 2024</p>
        <p className="text-sm font-medium">$99</p>
        <p className="text-sm font-medium">3 Times</p>
        <p className="text-sm font-medium">$99</p>
      </div>
      <div className="w-full grid grid-cols-5 px-6 py-4 border-b">
        <p className="text-sm font-medium">Simon</p>
        <p className="text-sm font-medium">24 Mar, 2024</p>
        <p className="text-sm font-medium">$99</p>
        <p className="text-sm font-medium">3 Times</p>
        <p className="text-sm font-medium">$99</p>
      </div>
      <div className="w-full grid grid-cols-5 px-6 py-4 border-b">
        <p className="text-sm font-medium">Simon</p>
        <p className="text-sm font-medium">24 Mar, 2024</p>
        <p className="text-sm font-medium">$99</p>
        <p className="text-sm font-medium">3 Times</p>
        <p className="text-sm font-medium">$99</p>
      </div>
      <div className="w-full grid grid-cols-5 px-6 py-4 border-b">
        <p className="text-sm font-medium">Simon</p>
        <p className="text-sm font-medium">24 Mar, 2024</p>
        <p className="text-sm font-medium">$99</p>
        <p className="text-sm font-medium">3 Times</p>
        <p className="text-sm font-medium">$99</p>
      </div>
      <div className="w-full grid grid-cols-5 px-6 py-4 border-b">
        <p className="text-sm font-medium">Simon</p>
        <p className="text-sm font-medium">24 Mar, 2024</p>
        <p className="text-sm font-medium">$99</p>
        <p className="text-sm font-medium">3 Times</p>
        <p className="text-sm font-medium">$99</p>
      </div>
      <div className="w-full grid grid-cols-5 px-6 py-4 border-b">
        <p className="text-sm font-medium">Simon</p>
        <p className="text-sm font-medium">24 Mar, 2024</p>
        <p className="text-sm font-medium">$99</p>
        <p className="text-sm font-medium">3 Times</p>
        <p className="text-sm font-medium">$99</p>
      </div>
    </div>
  );
};

export default RecentTransactions;
