import React, { useContext, useEffect, useState } from "react";
import { Notification } from "../assets/export";
import { IoSearchOutline } from "react-icons/io5";
import NotificationCreateModal from "../components/notifications/NotificationCreateModal";
import Loader from "../components/globals/Loader";
import { GlobalContext } from "../context/GlobalContext";
import Cookies from "js-cookie";
import axios from "axios";
import NoData from "../components/globals/NoData";

const Notifications = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const { baseUrl, navigate } = useContext(GlobalContext);
  const [notifications, setNotifications] = useState([]);
  const [notificationsLoading, setNotificationsLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  const getNotifications = () => {
    const token = Cookies.get("token");

    if (token) {
      setNotificationsLoading(true);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios.get(`${baseUrl}/admin/notifications`, { headers }).then(
        (response) => {
          setNotifications(response?.data?.data);
          setNotificationsLoading(false);
        },
        (error) => {
          setNotificationsLoading(false);
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
    getNotifications();
  }, [update]);

  const convertDate = (dateIso) => {
    const date = new Date(dateIso);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}/${year}`;
  };
  const [searchInput, setSearchInput] = useState("");
  const filteredData = notifications?.filter((notification) =>
    notification?.title?.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div className="w-full flex flex-col justify-start items-start gap-3">
      <div className="w-full h-auto flex justify-between items-center">
        <div className="w-96 relative">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search"
            className="w-full h-10 rounded-full px-3 outline-none border border-gray-200 text-gray-700"
          />
          <button className="w-8 h-8 absolute top-1 right-1 rounded-full text-md text-white bg-[#c00000] flex items-center justify-center">
            <IoSearchOutline />
          </button>
        </div>
        <button
          onClick={() => setIsNotificationOpen(true)}
          className="w-32 h-10 rounded-full bg-[#c00000] text-white text-sm font-medium"
        >
          Send New
        </button>
      </div>
      {notificationsLoading ? (
        <Loader />
      ) : filteredData?.length == 0 ? (
        <NoData />
      ) : (
        <div className="w-full h-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredData &&
            filteredData?.length > 0 &&
            filteredData?.map((notification, key) => {
              return (
                <div class=" flex  rounded-xl border border-gray-200 p-4 text-left text-gray-600  sm:p-4">
                  <img
                    class="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-8 sm:w-8"
                    src={Notification}
                    alt="Profile Picture"
                  />
                  <div class="w-full text-left">
                    <div class=" flex flex-col justify-between text-gray-600 sm:flex-row">
                      <h3 class="font-medium">{notification?.title}</h3>
                      <time class="text-xs">
                        {convertDate(notification?.updatedAt)}
                      </time>
                    </div>
                    <p class="text-sm">{notification?.message}</p>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      <NotificationCreateModal
        setUpdate={setUpdate}
        isOpen={isNotificationOpen}
        setIsOpen={setIsNotificationOpen}
      />
    </div>
  );
};

export default Notifications;
