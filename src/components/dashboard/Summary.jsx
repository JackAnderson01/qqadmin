import React, { useState, useContext, useEffect } from "react";
import SummaryCard from "./SummaryCard";
import { summary } from "../../constants/DashboardSummary";
import BarChartComponent from "./BarChart";
import LineChartComponent from "./LineChart";
import axios from "axios";
import Cookies from "js-cookie";
import { GlobalContext } from "../../context/GlobalContext";

const Summary = () => {
  const { baseUrl, navigate } = useContext(GlobalContext);
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  const getData = () => {
    const token = Cookies.get("token");

    if (token) {
      setDataLoading(true);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios.get(`${baseUrl}/admin/dashboard`, { headers }).then(
        (response) => {
          setData(response?.data?.data);
          setDataLoading(false);
        },
        (error) => {
          setDataLoading(false);
          if (error?.response?.status == 401) {
            setIsLoggedIn(false);
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
  }, [update]);
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChartComponent
          matches={data?.matchesMonthsData ? data?.matchesMonthsData : []}
        />
        <LineChartComponent
          revenue={data?.revenueMonthsData ? data?.revenueMonthsData : []}
          total={data?.totalRevenue ? data?.totalRevenue : 0}
        />
      </div>
    </div>
  );
};

export default Summary;
