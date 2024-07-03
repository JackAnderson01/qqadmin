import React, { useState, useContext, useEffect } from "react";
import { Logo } from "../assets/export";
import axios from "axios";
import Cookies from "js-cookie";
import { GlobalContext } from "../context/GlobalContext";
import Loader from "../components/globals/Loader";
import NoData from "../components/globals/NoData";

const Revenue = () => {
  const [searchInput, setSearchInput] = useState("");
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
  const filteredData = transactions?.filter(
    (transaction) =>
      transaction?.user?.fullName
        ?.toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      transaction?.user?.email
        ?.toLowerCase()
        .includes(searchInput?.toLowerCase())
  );
  return (
    <div className="w-full flex flex-col justify-start items-start gap-3">
      <div className="w-full flex justify-start items-center gap-4">
        <input
          type="text"
          id="name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="e.g. John Smith"
          className="mt-2 block w-full rounded-full border border-gray-200 px-3 py-2 shadow-sm outline-none focus:border-[#c00000] focus:ring focus:ring-red-200 focus:ring-opacity-50"
        />
        <button className="active:scale-95 rounded-full bg-[#c00000] px-8 py-2 font-medium text-white outline-none focus:ring focus:ring-red-200 hover:opacity-90">
          Search
        </button>
      </div>

      {transactionLoading ? (
        <Loader />
      ) : filteredData?.length === 0 ? (
        <NoData />
      ) : (
        <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          {filteredData?.map((transaction, key) => (
            <div
              key={key}
              className="border flex flex-col items-center gap-y-2 p-6 rounded-xl"
            >
              <div>
                <img
                  src={transaction?.user?.profilePicture}
                  alt=""
                  className="w-20 h-20 rounded-full"
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <h2 className="leading-tight font-medium">
                  {transaction?.user?.fullName}
                </h2>
                <div className="text-gray-400">{transaction?.user?.email}</div>
              </div>

              <div className="w-full flex justify-between items-center">
                <p className="text-slate-600 font-normal text-sm">Revenue</p>
                <p className="text-sm text-slate-600">
                  ${transaction?.totalRevenue}
                </p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p className="text-slate-600 font-normal text-sm">
                  Subscription taken
                </p>
                <p className="text-sm text-slate-600">
                  {transaction?.renewed} Times
                </p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p className="text-slate-600 font-normal text-sm">
                  Recent Transaction
                </p>
                <p className="text-sm text-slate-600">
                  ${transaction?.transaction}
                </p>
              </div>
              <div className="w-full">
                <button className="w-full capitalize text-sm rounded-lg py-2 bg-[#c00000] text-white transition-all duration-300">
                  {transaction?.productName}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Revenue;
