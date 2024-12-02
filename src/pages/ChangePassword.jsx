import React, { useContext, useEffect, useState } from "react";
import { AuthMockup, ChangePasswordMockup } from "../assets/export";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Cookies from "js-cookie";
import axios from "axios";
import BtnLoader from "../components/globals/BtnLoader";
import Error from "../components/globals/Error";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const ChangePassword = () => {
  const { baseUrl, navigate } = useContext(GlobalContext);
  // Error States
  const [passwordError, setPasswordError] = useState(false);
  const [formError, setFormError] = useState(false);
  // Loading States
  const [loading, setLoading] = useState(false);
  // States to manage the data
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfPassVisible, setIsConfPassVisible] = useState(false);

  function handleChangePass(e) {
    e.preventDefault();
    if (password == "") {
      setPasswordError("Password is required.");
      setTimeout(() => {
        setPasswordError(false);
      }, 3000);
    } else if (password.length < 6) {
      setPasswordError("Minimum Password length is 6.");
      setTimeout(() => {
        setPasswordError(false);
      }, 3000);
    } else if (password !== confPass) {
      setPasswordError("Password doesn't match");
      setTimeout(() => {
        setPasswordError(false);
      }, 3000);
    } else {
      setLoading(true);
      axios
        .post(
          `${baseUrl}/auth/updatePassOTP`,

          {
            email: Cookies.get("email"),
            password: password,
            confirmPassword: password,
            resetToken: Cookies.get("forgetToken"),
          }
        )
        .then(
          (response) => {
            if (response?.status == 200) {
              navigate("/login", "Dashboard");
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
      {passwordError && (
        <Error error={passwordError} setError={setPasswordError} />
      )}

      {/* Form Error */}
      {formError && <Error error={formError} setError={setFormError} />}
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
          <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-6" onSubmit={handleChangePass}>
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold">Update Password.</h3>
                <p className="text-sm mt-4">Update your password!</p>
              </div>
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="pass1"
                    type={isPassVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPassVisible((prev) => !prev)}
                    className="w-[18px] h-[18px] absolute right-4"
                  >
                    {isPassVisible ? (
                      <BsEye color="#bbb" />
                    ) : (
                      <BsEyeSlash color="#bbb" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block">Confirm Password</label>
                <div className="relative flex items-center">
                  <input
                    name="pass1"
                    type={isConfPassVisible ? "text" : "password"}
                    value={confPass}
                    onChange={(e) => setConfPass(e.target.value)}
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                    placeholder="Confirm Password"
                  />
                  <button
                    type="button"
                    onClick={() => setIsConfPassVisible((prev) => !prev)}
                    className="w-[18px] h-[18px] absolute right-4"
                  >
                    {isConfPassVisible ? (
                      <BsEye color="#bbb" />
                    ) : (
                      <BsEyeSlash color="#bbb" />
                    )}
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

export default ChangePassword;
