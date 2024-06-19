import React, { useContext, useEffect, useState } from "react";
import { AuthMockup, VerifyOtpMockup } from "../assets/export";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import Cookies from "js-cookie";
import BtnLoader from "../components/globals/BtnLoader";
import Error from "../components/globals/Error";

const VerifyOtp = () => {
  const { baseUrl, navigate } = useContext(GlobalContext);
  // Error States
  const [otpError, setOtpError] = useState(false);
  const [formError, setFormError] = useState(false);
  // Loading States
  const [loading, setLoading] = useState(false);
  // States to manage the data
  const [otp, setOtp] = useState("");

  function handleOtpVerification(e) {
    e.preventDefault();
    if (otp == "") {
      setOtpError("Otp is required.");
      setTimeout(() => {
        setOtpError(false);
      }, 3000);
    } else if (otp.length < 4) {
      setOtpError("Minimum Otp length is 4.");
      setTimeout(() => {
        setOtpError(false);
      }, 3000);
    } else {
      setLoading(true);
      axios
        .post(`${baseUrl}/auth/validatePassOTP`, {
          email: Cookies.get("email"),
          code: otp,
        })
        .then(
          (response) => {
            if (response?.status == 200) {
              Cookies.set("forgetToken", response?.data?.token, { expires: 1 });
              navigate("/change-password", "Dashboard");
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
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/dashboard", "Dashboard");
    }
  }, []);

  return (
    <div className="font-[sans-serif] text-[#333]">
      {/* Email Error */}
      {otpError && <Error error={otpError} setError={setOtpError} />}

      {/* Form Error */}
      {formError && <Error error={formError} setError={setFormError} />}
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
          <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-6" onSubmit={handleOtpVerification}>
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold">Verify OTP</h3>
                <p className="text-sm mt-4">
                  Input the OTP code we've provided at your registered email.
                </p>
              </div>
              <div>
                <label className="text-sm mb-2 block">OTP Code</label>
                <div className="relative flex items-center">
                  <input
                    name="otp"
                    type="password"
                    value={otp}
                    maxLength={4}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                    placeholder="OTP Code"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="!mt-4">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-md text-white bg-[#c00000] hover:bg-red-600 focus:outline-none"
                >
                  {loading ? <BtnLoader /> : "Verify OTP"}
                </button>
              </div>
            </form>
          </div>
          <div className="lg:h-[550px] md:h-[400px] max-md:mt-10">
            <img
              src={VerifyOtpMockup}
              className="w-full h-full object-cover"
              alt="Authentication Mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
