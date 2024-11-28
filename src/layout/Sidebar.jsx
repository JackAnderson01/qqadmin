import React, { useRef } from "react";
import { Logo } from "../assets/export";
import SidebarLink from "./SidebarLink";
import { LuFolderOpenDot, LuUser } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoAnalyticsOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { TbClover } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { RxUpdate } from "react-icons/rx";
import { FaUserSlash } from "react-icons/fa";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const toggleModal = (e) => {
    if (!sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const navigateToLogin = () => {
    Cookies.remove("token");
    navigate("/login");
  };
  return (
    <div
      onClick={toggleModal}
      className={`w-screen h-screen fixed top-0 left-0 transition-all duration-500  ${
        isOpen ? " lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
      } lg:static  z-[2000] lg:z-auto px-3 lg:w-60 xl:w-72 flex flex-col gap-3 items-center justify-start py-0 lg:h-full `}
    >
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 transition-all duration-200  ${
          isOpen ? " lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:static w-[60%] z-[2000] lg:z-auto px-3 lg:w-60 xl:w-72 flex flex-col gap-3 items-center justify-start py-0 h-full bg-white border-r border-gray-200 `}
      >
        <img src={Logo} alt="logo" className="h-24" />
        <SidebarLink
          title={"Dashboard"}
          link={"/dashboard"}
          icon={<LuLayoutDashboard />}
        />
        <SidebarLink title={"Users"} link={"/users"} icon={<LuUser />} />
        <SidebarLink title={"Matches"} link={"/matches"} icon={<TbClover />} />
        <SidebarLink
          title={"Notifications"}
          link={"/notifications"}
          icon={<IoNotificationsOutline />}
        />
        <SidebarLink
          title={"Deleted / Deactivated Users"}
          link={"/reports"}
          icon={<FaUserSlash />}
        />
        <SidebarLink
          title={"Reported Users"}
          link={"/reporteduser"}
          icon={<LuFolderOpenDot />}
        />
       
       
        <SidebarLink
          title={"Update Password"}
          link={"/update-password"}
          icon={<RxUpdate />}
        />
        {/* <SidebarLink
          title={"Subscriptions"}
          link={"/subscriptions"}
          icon={<IoAnalyticsOutline />}
        /> */}
        <button
          onClick={() => navigateToLogin()}
          className="group w-full h-12 border border-gray-200 hover:border-[#c00000] focus:border-[#c00000] rounded-full flex justify-start items-center "
        >
          <span className="flex w-1/6 h-full rounded-l-full border-r border-gray-200 group-hover:border-red-800 group-hover:text-[#c00000] group-focus:border-[#c00000] group-focus:text-[#c00000] justify-center items-center text-xl  text-gray-700 ">
            <HiOutlineLogout />
          </span>
          <span className="px-3  group-hover:text-[#c00000] group-focus:text-[#c00000] text-sm font-medium">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
