import React from "react";
import { Logo } from "../assets/export";

const Revenue = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-3">
      <div className="w-full rounded-xl border border-gray-200 bg-white p-6 ">
        <h2 className="text-stone-700 text-xl font-bold">Apply filters</h2>
        <p className="mt-1 text-sm">Use filters to further refine search</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2  lg:grid-cols-4">
          <div className="flex flex-col">
            <label for="name" className="text-stone-600 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Smith"
              className="mt-2 block w-full rounded-full border border-gray-200 px-3 py-2 shadow-sm outline-none focus:border-[#c00000] focus:ring focus:ring-red-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex flex-col">
            <label
              for="manufacturer"
              className="text-stone-600 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="manufacturer"
              placeholder="john@gmail.com"
              className="mt-2 block w-full rounded-full border border-gray-200 px-3 py-2 shadow-sm outline-none focus:border-[#c00000] focus:ring focus:ring-red-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex flex-col">
            <label for="date" className="text-stone-600 text-sm font-medium">
              Date of Registration
            </label>
            <input
              type="date"
              id="date"
              className="mt-2 block w-full rounded-full border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#c00000] focus:ring focus:ring-red-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex flex-col">
            <label for="status" className="text-stone-600 text-sm font-medium">
              Status
            </label>

            <select
              id="status"
              className="mt-2 block w-full rounded-full border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#c00000] focus:ring focus:ring-red-200 focus:ring-opacity-50"
            >
              <option>Active</option>
              <option>Closed</option>
            </select>
          </div>
        </div>

        <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
          <button className="active:scale-95 rounded-full bg-gray-50 px-8 py-2 font-medium text-[#c00000] outline-none focus:ring hover:opacity-90">
            Reset
          </button>
          <button className="active:scale-95 rounded-full bg-[#c00000] px-8 py-2 font-medium text-white outline-none focus:ring focus:ring-red-200 hover:opacity-90">
            Search
          </button>
        </div>
      </div>

      <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
        <div className="border flex flex-col items-center gap-y-2 p-6 rounded-xl">
          <div>
            <img
              src={Logo}
              alt=""
              className="w-20 h-20 rounded-full"
              style={{ backgroundPosition: "center", backgroundSize: "cover" }}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="leading-tight font-medium">John Doe</h2>
            <div className="text-gray-400">jobs@sailboatui.com</div>
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-slate-600 font-normal text-sm">Revenue</p>
            <p className="text-sm text-slate-600">$45</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-slate-600 font-normal text-sm">
              Subscription taken
            </p>
            <p className="text-sm text-slate-600">3 Times</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-slate-600 font-normal text-sm">
              Recent Transaction
            </p>
            <p className="text-sm text-slate-600">$10</p>
          </div>
          <div className="w-full">
            <button className="w-full text-sm rounded-lg py-2 bg-[#c00000] text-white transition-all duration-300">
              Basic
            </button>
          </div>
        </div>
        <div className="border flex flex-col items-center gap-y-2 p-6 rounded-xl">
          <div>
            <img
              src={Logo}
              alt=""
              className="w-20 h-20 rounded-full"
              style={{ backgroundPosition: "center", backgroundSize: "cover" }}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="leading-tight font-medium">John Doe</h2>
            <div className="text-gray-400">jobs@sailboatui.com</div>
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-slate-600 font-normal text-sm">Revenue</p>
            <p className="text-sm text-slate-600">$45</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-slate-600 font-normal text-sm">
              Subscription taken
            </p>
            <p className="text-sm text-slate-600">3 Times</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-slate-600 font-normal text-sm">
              Recent Transaction
            </p>
            <p className="text-sm text-slate-600">$10</p>
          </div>
          <div className="w-full">
            <button className="w-full text-sm rounded-lg py-2 bg-[#c00000] text-white transition-all duration-300">
              Basic
            </button>
          </div>
        </div>
        <div className="border flex flex-col items-center gap-y-2 p-6 rounded-xl">
          <div>
            <img
              src={Logo}
              alt=""
              className="w-20 h-20 rounded-full"
              style={{ backgroundPosition: "center", backgroundSize: "cover" }}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="leading-tight font-medium">John Doe</h2>
            <div className="text-gray-400">jobs@sailboatui.com</div>
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-slate-600 font-normal text-sm">Revenue</p>
            <p className="text-sm text-slate-600">$45</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-slate-600 font-normal text-sm">
              Subscription taken
            </p>
            <p className="text-sm text-slate-600">3 Times</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-slate-600 font-normal text-sm">
              Recent Transaction
            </p>
            <p className="text-sm text-slate-600">$10</p>
          </div>
          <div className="w-full">
            <button className="w-full text-sm rounded-lg py-2 bg-[#c00000] text-white transition-all duration-300">
              Basic
            </button>
          </div>
        </div>
        <div className="border flex flex-col items-center gap-y-2 p-6 rounded-xl">
          <div>
            <img
              src={Logo}
              alt=""
              className="w-20 h-20 rounded-full"
              style={{ backgroundPosition: "center", backgroundSize: "cover" }}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="leading-tight font-medium">John Doe</h2>
            <div className="text-gray-400">jobs@sailboatui.com</div>
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="text-slate-600 font-normal text-sm">Revenue</p>
            <p className="text-sm text-slate-600">$45</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-slate-600 font-normal text-sm">
              Subscription taken
            </p>
            <p className="text-sm text-slate-600">3 Times</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-slate-600 font-normal text-sm">
              Recent Transaction
            </p>
            <p className="text-sm text-slate-600">$10</p>
          </div>
          <div className="w-full">
            <button className="w-full text-sm rounded-lg py-2 bg-[#c00000] text-white transition-all duration-300">
              Basic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
