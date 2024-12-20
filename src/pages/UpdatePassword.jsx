import React, { useContext, useEffect, useState } from "react";
import { AuthMockup, ChangePasswordMockup } from "../assets/export";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Cookies from "js-cookie";
import axios from "axios";
import BtnLoader from "../components/globals/BtnLoader";
import Error from "../components/globals/Error";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const UpdatePassword = () => {
  const { baseUrl, navigate } = useContext(GlobalContext);
  // Error States
  const [passwordError, setPasswordError] = useState(false);
  const [formError, setFormError] = useState(false);
  // Loading States
  const [loading, setLoading] = useState(false);
  // States to manage the data
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confPass, setConfPass] = useState("");

  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isNewPassVisible, setIsNewPassVisible] = useState(false);
  const [isConfPassVisible, setIsConfPassVisible] = useState(false);

  function handleChangePass(e) {
    e.preventDefault();
    if (newPass == "") {
      setPasswordError("New Password is required.");
      setTimeout(() => {
        setPasswordError(false);
      }, 3000);
    } else if (newPass.length < 6) {
      setPasswordError("Minimum Password length is 6.");
      setTimeout(() => {
        setPasswordError(false);
      }, 3000);
    } else if (newPass !== confPass) {
      setPasswordError("Passwords must match.");
      setTimeout(() => {
        setPasswordError(false);
      }, 3000);
    } else {
      setLoading(true);
      const token = Cookies.get("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios
        .post(
          `${baseUrl}/auth/updatePass`,

          {
            email: Cookies.get("email"),
            currentPassword: password,
            password: newPass,
            confirmPassword: confPass,
          },
          { headers }
        )
        .then(
          (response) => {
            if (response?.status == 200) {
              navigate("/dashboard", "Dashboard");
            }
            setLoading(false);
          },
          (error) => {
            setLoading(false);
            setFormError(error?.response?.data?.message);
          }
        );
    }
  }

  return (
    <div className="font-[sans-serif] text-[#333]">
      {/* Email Error */}
      {passwordError && (
        <Error error={passwordError} setError={setPasswordError} />
      )}

      {/* Form Error */}
      {formError && <Error error={formError} setError={setFormError} />}
      <div className="min-h-full flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
          <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-6" onSubmit={handleChangePass}>
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold">Update Password.</h3>
                <p className="text-sm mt-4">Update your password!</p>
              </div>
              <div>
                <label className="text-sm mb-2 block">Current Password</label>
                <div className="relative flex items-center">
                  <input
                    name="pass1"
                    type={isPassVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                    placeholder="Current Password"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPassVisible((prev) => !prev)}
                    className="w-[18px] h-[18px] absolute right-4"
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className=" cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg> */}
                       {isPassVisible ? <BsEye color="#bbb" /> : <BsEyeSlash color="#bbb"   />}
                  </button>
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block">New Password</label>
                <div className="relative flex items-center">
                  <input
                    name="pass1"
                    type={isNewPassVisible ? "text" : "password"}
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                    placeholder="New Password"
                  />
                  <button
                    type="button"
                    onClick={() => setIsNewPassVisible((prev) => !prev)}
                    className="w-[18px] h-[18px] absolute right-4"
                  >
                                        {isNewPassVisible ? <BsEye color="#bbb" /> : <BsEyeSlash color="#bbb"   />}

                  </button>
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block">
                  Confirm New Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="pass1"
                    type={isConfPassVisible ? "text" : "password"}
                    value={confPass}
                    onChange={(e) => setConfPass(e.target.value)}
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                    placeholder="Confirm New Password"
                  />
                  <button
                    type="button"
                    onClick={() => setIsConfPassVisible((prev) => !prev)}
                    className="w-[18px] h-[18px] absolute right-4"
                  >
                     {isConfPassVisible ? <BsEye color="#bbb" /> : <BsEyeSlash color="#bbb"   />}
                  </button>
                </div>
              </div>

              <div className="!mt-4">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-md text-white bg-[#c00000] hover:bg-red-600 focus:outline-none"
                >
                  {loading ? <BtnLoader /> : "Update"}
                </button>
              </div>
            </form>
          </div>
          <div className="lg:h-[550px] md:h-[400px] max-md:mt-10">
            <img
              src={ChangePasswordMockup}
              className="w-full h-full object-cover"
              alt="Authentication Mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
