import React, { useState, useContext, useEffect } from "react";
import SummaryCard from "./SummaryCard";
import { summary } from "../../constants/DashboardSummary";
import BarChartComponent from "./BarChart";
import LineChartComponent from "./LineChart";
import axios from "axios";
import Cookies from "js-cookie";
import { GlobalContext } from "../../context/GlobalContext";
import StatesCard from "./StatesCard";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";

const Summary = () => {
  const { baseUrl, navigate } = useContext(GlobalContext);
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2024);

  const getData = () => {
    const token = Cookies.get("token");
    if (token) {
      let url = "/admin/dashboard";

      if (selectedYear) url += `?year=${encodeURIComponent(selectedYear)}`;

      setDataLoading(true);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios.get(`${baseUrl}${url}`, { headers }).then(
        (response) => {
          setData(response?.data?.data);
          setDataLoading(false);
          console.log(
            response?.data?.data?.matchesMonthsData[9]?.matches,
            "response?.data?.data"
          );
        },
        (error) => {
          setDataLoading(false);
          if (error?.response?.status == 401) {
            Cookies.remove("token");
            navigate("/login");
          }
        }
      );
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    getData();
  }, [update, selectedYear]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const generateYearsArray = (startYear = 2023) => {
    const currentYear = new Date().getFullYear();
    console.log(currentYear, "currentYearcurrentYear");
    const years = [];
    for (let year = startYear + 1; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  };

  const years = generateYearsArray();

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-end">
        <div className="relative bg-white border-2 border-[#c00000] w-[100px] h-[30px] rounded-[10px] flex items-center justify-center">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 text-[#c00000] text-[15px] font-[500]"
          >
            {selectedYear} <IoFilterOutline size={15} />
          </button>
          {isOpen && (
            <div className="absolute left-0 top-8 w-full rounded-md shadow-lg p-2 z-10 bg-white text-[14px] border-2 border-[#c00000]">
              {years?.map((year) => (
                <div
                  key={year}
                  className="px-2 py-1 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setSelectedYear(year);
                    setIsOpen(false);
                  }}
                >
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="my-8">
        <StatesCard data={data} dataLoading={dataLoading} />
      </div>
      <div className="w-full ">
        <BarChartComponent
          matches={data?.matchesMonthsData ? data?.matchesMonthsData : []}
          matchescount={data?.totalMatches}
          setSelectedYear={setSelectedYear}
          selectedYear={selectedYear}
        />
        {/* <LineChartComponent
          revenue={data?.revenueMonthsData ? data?.revenueMonthsData : []}
          total={data?.totalRevenue ? data?.totalRevenue : 0}
        /> */}
      </div>
    </div>
  );
};

export default Summary;
