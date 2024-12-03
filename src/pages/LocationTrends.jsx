import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { MdLocationOn } from "react-icons/md";
import Loader from "../components/globals/Loader";

const LocationTrends = () => {
  const [topLocations, setTopLocations] = useState([]);
  const [leastLocations, setLeastLocations] = useState([]);
  const { baseUrl, navigate } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const getTopAndLeastLocations = () => {
    const token = Cookies.get("token");
    if (token) {
      setLoading(true);
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios.get(`${baseUrl}/admin/topandLeastFiveLocations`, { headers }).then(
        (response) => {
          setTopLocations(response?.data?.data?.topFiveLocations || []);
          setLeastLocations(response?.data?.data?.leastFiveLocations || []);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          if (error?.response?.status === 401) {
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
    getTopAndLeastLocations();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container mx-auto px-4 py-6">
          <div className="grid gap-6 md:grid-cols-2">
           
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Top 5 Locations
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full table-auto text-sm">
                  <thead className="border-b">
                    <tr>
                      <th className="py-3 px-5 text-left font-medium text-gray-600">
                        Location
                      </th>
                      <th className="py-3 px-5 text-left font-medium text-gray-600">
                        Count
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {topLocations.map((location, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition duration-150"
                      >
                        <td className="py-4 px-5 flex items-center gap-2 text-gray-700">
                          <MdLocationOn size={20} className="text-red-500" />
                          {location?._id || "N/A"}
                        </td>
                        <td className="py-4 px-5 text-gray-700">
                          {location?.count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Least 5 Locations
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full table-auto text-sm">
                  <thead className="border-b">
                    <tr>
                      <th className="py-3 px-5 text-left font-medium text-gray-600">
                        Location
                      </th>
                      <th className="py-3 px-5 text-left font-medium text-gray-600">
                        Count
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leastLocations.map((location, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition duration-150"
                      >
                        <td className="py-4 px-5 flex items-center gap-2 text-gray-700">
                          <MdLocationOn size={20} className="text-red-500" />
                          {location?._id || "N/A"}
                        </td>
                        <td className="py-4 px-5 text-gray-700">
                          {location?.count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationTrends;
