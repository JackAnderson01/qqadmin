import React from "react";

const RecentTransactions = () => {
  return (
    <div className="w-full h-auto lg:h-[475px] border rounded-xl flex flex-col py-4 md:py-6">
      <div className="px-6 mb-6">
        <p className="text-base font-semibold">Recent Transactions</p>
      </div>
      <div className="border border-slate-200 rounded-xl"></div>
      <div className="w-full grid grid-cols-4 px-6 py-4">
        <p className="text-sm font-medium">User</p>
        <p className="text-sm font-medium">Date</p>
        <p className="text-sm font-medium">Amount</p>
        <p className="text-sm font-medium">Status</p>
      </div>
      <div className="border border-slate-200 rounded-xl"></div>
      <div className="w-full grid grid-cols-4 px-6 py-4 border-b">
        <p className="text-sm font-medium">Simon</p>
        <p className="text-sm font-medium">24 Mar, 2024</p>
        <p className="text-sm font-medium">$99</p>
        <p className="text-sm font-medium">Processing</p>
      </div>
      <div className="w-full grid grid-cols-4 px-6 py-4 border-b">
        <p className="text-sm font-medium">Simon</p>
        <p className="text-sm font-medium">24 Mar, 2024</p>
        <p className="text-sm font-medium">$99</p>
        <p className="text-sm font-medium">Processing</p>
      </div>
      <div className="w-full grid grid-cols-4 px-6 py-4 border-b">
        <p className="text-sm font-medium">Simon</p>
        <p className="text-sm font-medium">24 Mar, 2024</p>
        <p className="text-sm font-medium">$99</p>
        <p className="text-sm font-medium">Processing</p>
      </div>
      <div className="w-full grid grid-cols-4 px-6 py-4 border-b">
        <p className="text-sm font-medium">Simon</p>
        <p className="text-sm font-medium">24 Mar, 2024</p>
        <p className="text-sm font-medium">$99</p>
        <p className="text-sm font-medium">Completed</p>
      </div>
      <div className="w-full grid grid-cols-4 px-6 py-4 border-b">
        <p className="text-sm font-medium">Simon</p>
        <p className="text-sm font-medium">24 Mar, 2024</p>
        <p className="text-sm font-medium">$99</p>
        <p className="text-sm font-medium">Completed</p>
      </div>
      <div className="w-full grid grid-cols-4 px-6 py-4 border-b">
        <p className="text-sm font-medium">Simon</p>
        <p className="text-sm font-medium">24 Mar, 2024</p>
        <p className="text-sm font-medium">$99</p>
        <p className="text-sm font-medium">Completed</p>
      </div>
    </div>
  );
};

export default RecentTransactions;
