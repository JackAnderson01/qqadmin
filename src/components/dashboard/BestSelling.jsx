import React from "react";
import { BestSellingChart } from "../../assets/export";

const BestSelling = () => {
  return (
    <div className="w-full border rounded-xl p-6 flex flex-col justify-around gap-6 h-[475px]">
      <div className="flex flex-col gap-1">
        <p className="text-base font-semibold">Best Selling</p>
        <p className="uppercase font-medium text-[#5C5F6A] text-xs">
          this month
        </p>
      </div>
      <div className="border border-slate-200 rounded-xl"></div>
      <div className="flex flex-col gap-6">
        <p className="text-xl font-bold">
          $2,400{" "}
          <span className="font-medium text-[#5C5F6A] text-xs">
            - Total Sales
          </span>
        </p>
        <div className="flex flex-col gap-4">
          <div className="border rounded-2xl w-full flex justify-between items-center px-4 py-2">
            <p className="font-medium text-[#5C5F6A] text-sm">Basic Plan </p>
            <p className="text-black text-base">$345</p>
          </div>
          <div className="border rounded-2xl w-full flex justify-between items-center px-4 py-2">
            <p className="font-medium text-[#5C5F6A] text-sm">Standard Plan </p>
            <p className="text-black text-base">$345</p>
          </div>
          <div className="border rounded-2xl w-full flex justify-between items-center px-4 py-2">
            <p className="font-medium text-[#5C5F6A] text-sm">Premium Plan </p>
            <p className="text-black text-base">$345</p>
          </div>
        </div>
      </div>
      <img src={BestSellingChart} alt="" className="block w-[96px] h-[96px]" />
    </div>
  );
};

export default BestSelling;
