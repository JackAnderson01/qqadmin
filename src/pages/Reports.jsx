import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { GlobalContext } from "../context/GlobalContext";
import NoData from "../components/globals/NoData";
import Loader from "../components/globals/Loader";

const Reports = () => {
  const { baseUrl, navigate } = useContext(GlobalContext);
  const [reasons, setReasons] = useState([]);
  const [reasonsLoading, setReasonsLoading] = useState(false);

  const getReasons = () => {
    const token = Cookies.get("token");

    if (token) {
      setReasonsLoading(true);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios.get(`${baseUrl}/admin/reasons`, { headers }).then(
        (response) => {
          console.log(response);
          setReasons(response?.data?.data);
          setReasonsLoading(false);
        },
        (error) => {
          setReasonsLoading(false);
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
    getReasons();
  }, []);

  const convertDate = (dateIso) => {
    const date = new Date(dateIso);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}/${year}`;
  };
  const [searchInput, setSearchInput] = useState("");
  const filteredData = reasons?.filter(
    (reason) =>
      reason?.fullName?.toLowerCase().includes(searchInput.toLowerCase()) ||
      reason?.email?.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div className="w-full flex flex-col justify-start items-start gap-3">
      <div className="w-full flex justify-start items-center gap-4  ">
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
      {reasonsLoading ? (
        <Loader />
      ) : filteredData?.length == 0 ? (
        <NoData />
      ) : (
        <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white px-6 py-2 ">
          {
            <table className="w-full border-collapse  text-left text-sm text-gray-500">
              <thead className="">
                <tr className="">
                  <th
                    scope="col"
                    className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#c00000]"
                  >
                    User
                  </th>

                  <th
                    scope="col"
                    className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#c00000]"
                  >
                    Reason
                  </th>

                  <th
                    scope="col"
                    className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#c00000]"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {filteredData &&
                  filteredData?.length > 0 &&
                  filteredData?.map((reason, key) => {
                    return (
                      <tr key={key} className="">
                        <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                          <div className="relative h-10 w-10">
                            <img
                              className="h-full w-full rounded-full object-cover object-center"
                              src={reason?.profilePicture}
                              alt=""
                            />
                            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                          </div>
                          <div className="text-sm">
                            <div className="font-medium text-gray-700">
                              {reason?.fullName}
                            </div>
                            <div className="text-gray-400">{reason?.email}</div>
                          </div>
                        </th>

                        <td className="px-6 lg:px-4 xl:px-0 py- capitalize">
                          {reason?.reason}
                        </td>

                        <td className="px-6 lg:px-4 xl:px-0 py-4  font-normal ">
                          {convertDate(reason?.updatedAt)}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          }
        </div>
      )}
    </div>
  );
};

export default Reports;
