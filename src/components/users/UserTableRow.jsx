import React, { useContext, useState } from "react";
import { TbFlagHeart } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import Cookies from "js-cookie";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
import BlockModal from "../globals/BloackModal";

const UserTableRow = ({ user, setUpdate ,userLoading}) => {
  const [loading, setLoading] = useState(false);
  const { baseUrl, navigate } = useContext(GlobalContext);
  const [openBlock, setOpenBlock] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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

  const handleBlockUnblockClick = (id, block) => {
    setSelectedUser(id);
    setIsBlocked(block);
    setOpenBlock(true);
  };

  return (
    <>
    
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
            <div className="font-medium text-gray-700">
              {user?.fullName || "N/A"}
            </div>
            <div className="text-gray-400">{user?.email || "N/A"}</div>
          </div>
        </th>

        <td className="px-6 lg:px-4 xl:px-0 py- capitalize">
          {user?.age || "N/A"}
        </td>
        <td className="px-6 lg:px-4 xl:px-0 py- capitalize">{user?.gender}</td>
        <td className="px-6 lg:px-4 xl:px-0 py- capitalize">
          {" "}
          {new Date(user?.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </td>
        <td className="px-6 lg:px-4 xl:px-0 py- capitalize">
          {user?.state || "N/A"}
        </td>
        <td className="px-6 lg:px-4 xl:px-0 py- capitalize">
          {user?.city || "N/A"}
        </td>

        <td className="px-6 lg:px-4 xl:px-0py-4  font-normal ">
          <div className="flex gap-1 ">
            <FaHeart className="text-lg text-red-600" />
            <span>{user?.matches}</span>
          </div>
        </td>

        <td className="px-6 lg:px-4 xl:px-0 py-4">
          {user?.isBlocked ? (
            <button
              onClick={() =>
                handleBlockUnblockClick(user?.id, false)
              }
              className="w-auto px-2 h-6 bg-green-700 hover:opacity-80 text-white rounded-full text-xs"
            >
              Unblock
            </button>
          ) : (
            <button
              onClick={() =>
                handleBlockUnblockClick(user?.id, true)
              }
              className="w-auto px-2 h-6 bg-[#c00000] hover:opacity-80 text-white rounded-full text-xs"
            >
              Block
            </button>
          )}
        </td>
      </tr>
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

export default UserTableRow;
