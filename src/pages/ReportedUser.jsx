import React, { useContext, useEffect, useState } from "react";
import { TbFlagHeart } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import Loader from "../components/globals/Loader";
import { GlobalContext } from "../context/GlobalContext";
import Cookies from "js-cookie";
import axios from "axios";
import NoData from "../components/globals/NoData";
import BlockModal from "../components/globals/BloackModal";

const ReportedUser = () => {
  const [searchInput, setSearchInput] = useState("");
  const { baseUrl, navigate } = useContext(GlobalContext);
  const [reporteduser, setReporteduser] = useState([]);
  const [userLoading, setUserLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [paginationData, setPaginationData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openBlock, setOpenBlock] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const getUsers = () => {
    const token = Cookies.get("token");

    if (token) {
      setUserLoading(true);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios.get(`${baseUrl}/admin/reports`, { headers }).then(
        (response) => {
          setReporteduser(response?.data?.data);
          console.log(reporteduser, "reporteduser");
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

  const blockUser = (id, block) => {
    const token = Cookies.get("token");
    if (!token) {
      Cookies.remove("token");
      navigate("/login");
      return;
    }

    const headers = { Authorization: `Bearer ${token}` };
    setLoading(true);

    axios
      .post(
        `${baseUrl}/admin/toggleBlock`,
        { userId: id, isBlocked: block },
        { headers }
      )
      .then(() => {
        setReporteduser((prev) =>
          prev.map((user) =>
            user.reportedUser.id === id
              ? {
                  ...user,
                  reportedUser: { ...user.reportedUser, isBlocked: block },
                }
              : user
          )
        );
        setOpenBlock(false);
        getUsers();
      })
      .catch((error) => {
        console.error(error?.response?.data?.message || "Error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleBlockUnblockClick = (id, block) => {
    setSelectedUser(id);
    setIsBlocked(block);
    setOpenBlock(true);
  };

  useEffect(() => {
    getUsers();
  }, [update]);

  const filteredData = reporteduser?.filter(
    (item) =>
      item?.reportedUser?.fullName
        ?.toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      item?.reportedUser?.email
        ?.toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      item?.user?.fullName?.toLowerCase().includes(searchInput.toLowerCase()) ||
      item?.user?.email?.toLowerCase().includes(searchInput.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  console.log(currentData, "currentDatacurrentData");

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
        ) : reporteduser?.length == 0 ? (
          <NoData />
        ) : (
          <div className="w-full overflow-x-auto ">
            <div className="rounded-xl border border-gray-200 bg-white px-6 py-2 ">
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
                        Reported User
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
                        Discription
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {currentData?.map((item, key) => (
                      <tr className="" key={key}>
                        <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                          <div className="relative h-10 w-10">
                            <img
                              className="h-full w-full rounded-full object-cover object-center"
                              src={
                                item?.user?.profilePicture
                                  ? item?.user?.profilePicture
                                  : "https://qq-admin.vercel.app/assets/logo-agm6qbPj.png"
                              }
                              alt=""
                            />
                          </div>
                          <div className="text-sm">
                            <div className="font-medium text-gray-700">
                              {item?.user?.fullName || "N/A"}
                            </div>
                            <div className="text-gray-400">
                              {item?.user?.email || "N/A"}
                            </div>
                          </div>
                        </th>
                        <td>
                          <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
                            <div className="relative h-10 w-10">
                              <img
                                className="h-full w-full rounded-full object-cover object-center"
                                src={
                                  item?.reportedUser?.profilePicture
                                    ? item?.reportedUser?.profilePicture
                                    : "https://qq-admin.vercel.app/assets/logo-agm6qbPj.png"
                                }
                                alt=""
                              />
                            </div>
                            <div className="text-sm">
                              <div className="font-medium text-gray-700">
                                {item?.reportedUser?.fullName || "N/A"}
                              </div>
                              <div className="text-gray-400">
                                {item?.reportedUser?.email || "N/A"}
                              </div>
                            </div>
                          </th>
                        </td>

                        <td className="px-6 lg:px-4 xl:px-0 py- capitalize">
                          {item?.reason || "N/A"}
                        </td>
                        <td className="px-6 lg:px-4 xl:px-0 py- capitalize">
                          {item?.description || "N/A"}
                        </td>
                        <td className="px-6 lg:px-4 xl:px-0 py- capitalize">
                          {" "}
                          {new Date(item?.cretaedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            }
                          )}
                        </td>
                        <td>
                          {item.reportedUser.isBlocked ? (
                            <button
                              onClick={() =>
                                handleBlockUnblockClick(
                                  item?.reportedUser?.id,
                                  false
                                )
                              }
                              className="w-auto px-2 h-6 bg-green-700 hover:opacity-80 text-white rounded-full text-xs"
                            >
                              Unblock
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                handleBlockUnblockClick(
                                  item?.reportedUser?.id,
                                  true
                                )
                              }
                              className="w-auto px-2 h-6 bg-[#c00000] hover:opacity-80 text-white rounded-full text-xs"
                            >
                              Block
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
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
      <BlockModal
        isOpen={openBlock}
        onRequestClose={() => setOpenBlock(false)}
        onConfirm={() => blockUser(selectedUser, isBlocked)}
        loading={loading}
        isBlocked={isBlocked}
      />
    </>
  );
};

export default ReportedUser;
