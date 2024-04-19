import React from "react";
import { TbFlagHeart } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";

const Users = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-3">
      <div className="w-full rounded-xl border border-gray-200 bg-white p-6 ">
        <h2 className="text-stone-700 text-xl font-bold">Apply filters</h2>
        <p className="mt-1 text-sm">Use filters to further refine search</p>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-2  lg:grid-cols-4">
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

      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white px-6 py-2 ">
        <table className="w-full border-collapse  text-left text-sm text-gray-500">
          <thead className="">
            <tr className="">
              <th
                scope="col"
                className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#c00000]"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#c00000]"
              >
                State
              </th>
              <th
                scope="col"
                className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#c00000]"
              >
                Location
              </th>

              <th
                scope="col"
                className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#c00000]"
              >
                Matches
              </th>

              <th
                scope="col"
                className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#c00000]"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div className="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

              <td className="px-6 lg:px-4 xl:px-0py-4  font-normal ">
                <div className="flex gap-1 ">
                  <FaHeart className="text-lg text-red-600" />
                  <span>8</span>
                </div>
              </td>

              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <button className="w-auto px-2 h-6 bg-[#c00000] hover:opacity-80 text-white rounded-full text-xs">
                  Block
                </button>
              </td>
            </tr>
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div className="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

              <td className="px-6 lg:px-4 xl:px-0py-4  font-normal ">
                <div className="flex gap-1 ">
                  <FaHeart className="text-lg text-red-600" />
                  <span>8</span>
                </div>
              </td>

              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <button className="w-auto px-2 h-6 bg-[#c00000] hover:opacity-80 text-white rounded-full text-xs">
                  Block
                </button>
              </td>
            </tr>
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div className="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

              <td className="px-6 lg:px-4 xl:px-0py-4  font-normal ">
                <div className="flex gap-1 ">
                  <FaHeart className="text-lg text-red-600" />
                  <span>8</span>
                </div>
              </td>

              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <button className="w-auto px-2 h-6 bg-[#c00000] hover:opacity-80 text-white rounded-full text-xs">
                  Block
                </button>
              </td>
            </tr>
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div className="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

              <td className="px-6 lg:px-4 xl:px-0py-4  font-normal ">
                <div className="flex gap-1 ">
                  <FaHeart className="text-lg text-red-600" />
                  <span>8</span>
                </div>
              </td>

              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <button className="w-auto px-2 h-6 bg-[#c00000] hover:opacity-80 text-white rounded-full text-xs">
                  Block
                </button>
              </td>
            </tr>
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div className="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

              <td className="px-6 lg:px-4 xl:px-0py-4  font-normal ">
                <div className="flex gap-1 ">
                  <FaHeart className="text-lg text-red-600" />
                  <span>8</span>
                </div>
              </td>

              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <button className="w-auto px-2 h-6 bg-[#c00000] hover:opacity-80 text-white rounded-full text-xs">
                  Block
                </button>
              </td>
            </tr>
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div className="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

              <td className="px-6 lg:px-4 xl:px-0py-4  font-normal ">
                <div className="flex gap-1 ">
                  <FaHeart className="text-lg text-red-600" />
                  <span>8</span>
                </div>
              </td>

              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <button className="w-auto px-2 h-6 bg-[#c00000] hover:opacity-80 text-white rounded-full text-xs">
                  Block
                </button>
              </td>
            </tr>
            <tr className="">
              <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div className="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              <td className="px-6 lg:px-4 xl:px-0 py-4">Toronto, UK</td>

              <td className="px-6 lg:px-4 xl:px-0py-4  font-normal ">
                <div className="flex gap-1 ">
                  <FaHeart className="text-lg text-red-600" />
                  <span>8</span>
                </div>
              </td>

              <td className="px-6 lg:px-4 xl:px-0 py-4">
                <button className="w-auto px-2 h-6 bg-[#c00000] hover:opacity-80 text-white rounded-full text-xs">
                  Block
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
