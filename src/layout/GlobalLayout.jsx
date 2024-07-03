import React, { useContext, useEffect, useRef, useState } from "react";
import { Logo } from "../assets/export";
import { PiCaretDown } from "react-icons/pi";
import Sidebar from "./Sidebar";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GlobalContext } from "../context/GlobalContext";
import Cookies from "js-cookie";

const GlobalLayout = ({ page }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { navigate } = useContext(GlobalContext);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login", "Dashboard");
    }
  }, []);

  return (
    <div className="w-screen h-screen flex justify-start items-start">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="w-full relative lg:w-[calc(100%-15rem)] xl:w-[calc(100%-18rem)] h-full  overflow-y-auto overflow-x-hidden">
        <div className="sticky top-0 left-0 w-full h-16 bg-white z-[1000] border-b border-gray-200 flex items-center justify-end lg:justify-end px-4">
          <button
            className="block lg:hidden"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <CgMenuLeftAlt className="text-3xl text-[#c00000]" />
          </button>
        </div>
        <div className="w-full p-6">{page}</div>
      </div>
    </div>
  );
};

export default GlobalLayout;
