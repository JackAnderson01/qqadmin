import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Cookies from "js-cookie";
import axios from "axios";
import Loader from "../globals/Loader";
import NoData from "../globals/NoData";

const RecentTransactions = () => {
  const { baseUrl, navigate } = useContext(GlobalContext);
  const [transactions, setTransactions] = useState([]);
  const [transactionLoading, setTransactionsLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  const getTransactions = () => {
    const token = Cookies.get("token");

    if (token) {
      setTransactionsLoading(true);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios.get(`${baseUrl}/admin/transactions`, { headers }).then(
        (response) => {
          setTransactions(response?.data?.data);
          setTransactionsLoading(false);
        },
        (error) => {
          setTransactionsLoading(false);
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
    getTransactions();
  }, [update]);
  return (
    <div className="w-full h-auto lg:max-h-auto border rounded-xl flex flex-col py-4 md:py-6">
      <div className="px-6 mb-6 w-full h-auto flex justify-between items-center">
        <p className="text-base font-semibold">Recent Transactions</p>

        <button
          className="w-24 h-10 rounded-full flex items-center justify-center bg-[#c00000] text-white text-sm font-medium"
          onClick={() => navigate("/revenue", "Revenue")}
        >
          View All
        </button>
      </div>
      <div className="border border-slate-200 rounded-xl"></div>
      <div className="w-full grid grid-cols-4 px-6 py-4">
        <p className="text-sm font-medium">User</p>
        <p className="text-sm font-medium">Recent Transaction</p>
        <p className="text-sm font-medium">Subscriptions Taken</p>
        <p className="text-sm font-medium">Total Revenue</p>
      </div>
      <div className="border border-slate-200 rounded-xl"></div>
      {transactionLoading ? (
        <Loader />
      ) : transactions?.length == 0 ? (
        <NoData />
      ) : (
        transactions?.slice(0, 6)?.map((transaction) => {
          return (
            <div
              key={transaction?.id}
              className="w-full grid grid-cols-4 px-6 py-4 border-b"
            >
              <div className="w-full flex gap-1 justify-start items-center">
                <p className="text-sm  font-medium">
                  <span>{transaction?.user?.fullName}</span>
                </p>
              </div>
              <p className="text-sm font-medium">${transaction?.transaction}</p>
              <p className="text-sm font-medium">
                {transaction?.renewed} Times
              </p>
              <p className="text-sm font-medium">
                ${transaction?.totalRevenue}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecentTransactions;
