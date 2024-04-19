import React from "react";
import { AuthMockup, Logo } from "../assets/export";
import { FaHeart } from "react-icons/fa";

const Matches = () => {
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
      <div className="w-full h-auto grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="w-full h-32 flex justify-start items-start p-6 md:p-2 lg:p-6 gap-4 bg-white rounded-2xl border border-gray-200">
          <div className="w-[49%] flex flex-col items-center gap-y-2  rounded-xl">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&s"
                alt=""
                className="w-12 h-12 rounded-full"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="leading-tight text-sm font-medium">John Doe</h2>
              <div className="text-gray-400 text-xs">jobs@sailboatui.com</div>
            </div>
          </div>
          <div className="relative w-[1px] flex items-center justify-center  h-full  rounded-full">
            <span className="absolute top-4 -left-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#c00000]/[0.05]">
              <FaHeart className="text-2xl text-red-500" />
            </span>
          </div>
          <div className="w-[49%] flex flex-col items-center gap-y-2  rounded-xl">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&s"
                alt=""
                className="w-12 h-12 rounded-full"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="leading-tight text-sm font-medium">John Doe</h2>
              <div className="text-gray-400 text-xs">jobs@sailboatui.com</div>
            </div>
          </div>
        </div>
        <div className="w-full h-32 flex justify-start items-start p-6 md:p-2 lg:p-6 gap-4 bg-white rounded-2xl border border-gray-200">
          <div className="w-[49%] flex flex-col items-center gap-y-2  rounded-xl">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&s"
                alt=""
                className="w-12 h-12 rounded-full"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="leading-tight text-sm font-medium">John Doe</h2>
              <div className="text-gray-400 text-xs">jobs@sailboatui.com</div>
            </div>
          </div>
          <div className="relative w-[1px] flex items-center justify-center  h-full  rounded-full">
            <span className="absolute top-4 -left-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#c00000]/[0.05]">
              <FaHeart className="text-2xl text-red-500" />
            </span>
          </div>
          <div className="w-[49%] flex flex-col items-center gap-y-2  rounded-xl">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&s"
                alt=""
                className="w-12 h-12 rounded-full"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="leading-tight text-sm font-medium">John Doe</h2>
              <div className="text-gray-400 text-xs">jobs@sailboatui.com</div>
            </div>
          </div>
        </div>
        <div className="w-full h-32 flex justify-start items-start p-6 md:p-2 lg:p-6 gap-4 bg-white rounded-2xl border border-gray-200">
          <div className="w-[49%] flex flex-col items-center gap-y-2  rounded-xl">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&s"
                alt=""
                className="w-12 h-12 rounded-full"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="leading-tight text-sm font-medium">John Doe</h2>
              <div className="text-gray-400 text-xs">jobs@sailboatui.com</div>
            </div>
          </div>
          <div className="relative w-[1px] flex items-center justify-center  h-full  rounded-full">
            <span className="absolute top-4 -left-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#c00000]/[0.05]">
              <FaHeart className="text-2xl text-red-500" />
            </span>
          </div>
          <div className="w-[49%] flex flex-col items-center gap-y-2  rounded-xl">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&s"
                alt=""
                className="w-12 h-12 rounded-full"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="leading-tight text-sm font-medium">John Doe</h2>
              <div className="text-gray-400 text-xs">jobs@sailboatui.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
