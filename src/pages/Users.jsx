import React, { useContext, useEffect, useState } from "react";
import { TbFlagHeart } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import Loader from "../components/globals/Loader";
import { GlobalContext } from "../context/GlobalContext";
import Cookies from "js-cookie";
import axios from "axios";
import NoData from "../components/globals/NoData";
import UserTableRow from "../components/users/UserTableRow";

const Users = () => {
  const [searchInput, setSearchInput] = useState("");
  const { baseUrl, navigate } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  const getUsers = () => {
    const token = Cookies.get("token");

    if (token) {
      setUserLoading(true);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios.get(`${baseUrl}/admin/users`, { headers }).then(
        (response) => {
          setUsers(response?.data?.data);
          setUserLoading(false);
        },
        (error) => {
          setUserLoading(false);
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
    getUsers();
  }, [update]);
  const filteredData = users?.filter(
    (user) =>
      user?.fullName?.toLowerCase().includes(searchInput.toLowerCase()) ||
      user?.email?.toLowerCase().includes(searchInput?.toLowerCase())
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
      {userLoading ? (
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
                    Name
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
                {filteredData &&
                  filteredData?.length > 0 &&
                  filteredData?.map((user, key) => {
                    return (
                      <UserTableRow
                        user={user}
                        key={key}
                        setUpdate={setUpdate}
                      />
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

export default Users;
