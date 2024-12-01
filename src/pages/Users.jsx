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
  const [tabs, setTabs] = useState("all");
  const [paginationData, setPaginationData] = useState([]);

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
          console.log(response?.data?.data, "usersusersDetails");
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
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
          <div className="w-full overflow-x-auto">
            <div className=" rounded-xl border border-gray-200 bg-white px-6 py-2 ">
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
                        Age
                      </th>

                      <th
                        scope="col"
                        className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#c00000]"
                      >
                        Gender
                      </th>
                      <th
                        scope="col"
                        className="px-6 lg:px-4 xl:px-0 py-4 font-medium text-[#c00000]"
                      >
                        Created At
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
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {filteredData &&
                      filteredData?.length > 0 &&
                      currentData?.map((user, key) => {
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
            <nav
              class="flex items-center  justify-end mt-2 -space-x-px"
              aria-label="Pagination"
            >
              <button
                type="button"
                onClick={() =>
                  goToPage(currentPage > 1 ? currentPage - 1 : currentPage)
                }
                class="min-h-[38px] min-w-[38px] py-2 bg-gray-100 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-xl last:rounded-e-xl border  text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                aria-label="Previous"
              >
                <svg
                  class="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span class="hidden sm:block">Previous</span>
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  class={`min-h-[38px] min-w-[38px]  flex hover:bg-gray-100 justify-center items-center  text-gray-800 ${
                    currentPage === i + 1
                      ? " border bg-[#c00000] text-white hover:bg-[#c00000] "
                      : "border bg-gray-100"
                  }    py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none  disabled:opacity-50 disabled:pointer-events-none `}
                  aria-current="page"
                >
                  {i + 1}
                </button>
              ))}
              <button
                type="button"
                onClick={() =>
                  goToPage(
                    currentPage < totalPages ? currentPage + 1 : currentPage
                  )
                }
                class="min-h-[38px] min-w-[38px] py-2 bg-gray-100 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-xl last:rounded-e-xl border  text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                aria-label="Next"
              >
                <span class="hidden sm:block">Next</span>
                <svg
                  class="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Users;
