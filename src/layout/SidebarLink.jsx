import React from "react";
import { PiAddressBookDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const SidebarLink = ({ title, link, icon }) => {
  return (
    <Link
      to={link}
      className="group w-full h-12 border border-gray-200 hover:border-[#c00000] focus:border-[#c00000] rounded-full flex justify-start items-center "
    >
      <span className="flex w-1/6 h-full rounded-l-full border-r border-gray-200 group-hover:border-red-800 group-hover:text-[#c00000] group-focus:border-[#c00000] group-focus:text-[#c00000] justify-center items-center text-xl  text-gray-700 ">
        {icon}
      </span>
      <span className="px-3  group-hover:text-[#c00000] group-focus:text-[#c00000] text-sm font-medium">
        {title}
      </span>
    </Link>
  );
};

export default SidebarLink;
