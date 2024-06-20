import React, { useContext, useEffect, useState } from "react";
import { AuthMockup, Logo } from "../assets/export";
import { FaHeart } from "react-icons/fa";
import { MatchesContext } from "../context/MatchesContext";
import Loader from "../components/globals/Loader";
import NoData from "../components/globals/NoData";
import { GlobalContext } from "../context/GlobalContext";
import Cookies from "js-cookie";
import axios from "axios";

const Matches = () => {
  const [searchInput, setSearchInput] = useState("");
  const { baseUrl, navigate } = useContext(GlobalContext);
  const [matches, setMatches] = useState([]);
  const [matchesLoading, setMatchesLoading] = useState(false);

  const getMatches = () => {
    const token = Cookies.get("token");

    if (token) {
      setMatchesLoading(true);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios.get(`${baseUrl}/admin/matches`, { headers }).then(
        (response) => {
          setMatches(response?.data?.data);
          setMatchesLoading(false);
        },
        (error) => {
          setMatchesLoading(false);
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
    getMatches();
  }, []);

  const filteredData = matches?.filter(
    (match) =>
      match?.user?.fullName
        ?.toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      match?.otherUser?.fullName
        ?.toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      match?.user?.email?.toLowerCase().includes(searchInput.toLowerCase()) ||
      match?.otherUser?.email?.toLowerCase().includes(searchInput.toLowerCase())
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
      {matchesLoading ? (
        <Loader />
      ) : filteredData?.length == 0 ? (
        <NoData />
      ) : (
        <div className="w-full h-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredData?.length > 0 &&
            filteredData?.map((match, key) => {
              return (
                <div className="w-full h-40 flex justify-start items-start p-6 md:p-2 lg:p-6 gap-4 bg-white rounded-2xl border border-gray-200">
                  <div className="w-[49%] flex flex-col items-center gap-y-2  rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <img
                        src={match?.user?.profilePicture}
                        alt=""
                        className="w-16 h-16 rounded-full"
                        style={{
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center">
                      <h2 className="leading-tight text-sm font-medium">
                        {match?.user?.fullName}
                      </h2>
                      <div className="text-gray-400 text-xs">
                        {match?.user?.email}
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[1px] flex items-center justify-center  h-full  rounded-full">
                    <span className="absolute top-4 -left-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#c00000]/[0.05]">
                      <FaHeart className="text-2xl text-red-500" />
                    </span>
                  </div>
                  <div className="w-[49%] flex flex-col items-center gap-y-2  rounded-xl">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <img
                        src={match?.otherUser?.profilePicture}
                        alt=""
                        className="w-16 h-16 rounded-full"
                        style={{
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center">
                      <h2 className="leading-tight text-sm font-medium">
                        {match?.otherUser?.fullName}
                      </h2>
                      <div className="text-gray-400 text-xs">
                        {match?.otherUser?.email}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Matches;
