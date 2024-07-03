import React from "react";
import { TbFlagHeart } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import Cookies from "js-cookie";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";

const UserTableRow = ({ user, setUpdate }) => {
  const [loading, setLoading] = React.useState(false);
  const { baseUrl, navigate } = React.useContext(GlobalContext);
  const blockUser = (id, block) => {
    const token = Cookies.get("token");
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      setLoading(true);
      axios
        .post(
          `${baseUrl}/admin/toggleBlock`,
          {
            userId: id,
            isBlocked: block,
          },
          { headers }
        )
        .then(
          (response) => {
            setUpdate((prev) => !prev);
            setLoading(false);
          },
          (error) => {
            setError(error?.response?.data?.message);
            setLoading(false);
          }
        );
    } else {
      setLoading(false);
      Cookies.remove("token");
      navigate("/login");
    }
  };
  return (
    <tr className="">
      <th className="px-6 lg:px-4 xl:px-0 flex gap-3  py-4 font-normal text-gray-900">
        <div className="relative h-10 w-10">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src={
              user?.profilePicture
                ? user?.profilePicture
                : "https://qq-admin.vercel.app/assets/logo-agm6qbPj.png"
            }
            alt=""
          />
        </div>
        <div className="text-sm">
          <div className="font-medium text-gray-700">{user?.fullName}</div>
          <div className="text-gray-400">{user?.email}</div>
        </div>
      </th>

      <td className="px-6 lg:px-4 xl:px-0 py- capitalize">{user?.country}</td>

      <td className="px-6 lg:px-4 xl:px-0py-4  font-normal ">
        <div className="flex gap-1 ">
          <FaHeart className="text-lg text-red-600" />
          <span>{user?.matches}</span>
        </div>
      </td>

      <td className="px-6 lg:px-4 xl:px-0 py-4">
        {user?.isBlocked ? (
          <button
            onClick={() => blockUser(user?.id, false)}
            className="w-auto px-2 h-6 bg-green-700 hover:opacity-80 text-white rounded-full text-xs"
          >
            {loading ? "Unblocking" : "Unblock"}
          </button>
        ) : (
          <button
            onClick={() => blockUser(user?.id, true)}
            className="w-auto px-2 h-6 bg-[#c00000] hover:opacity-80 text-white rounded-full text-xs"
          >
            {loading ? "Blocking" : "Block"}
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserTableRow;
