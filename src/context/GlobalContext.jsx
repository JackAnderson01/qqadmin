import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const baseUrl = "https://backend.qualityandquantityapp.com";
  const route = useNavigate();
  const [active, setActive] = useState("Dashboard");
  const navigate = (link, name) => {
    route(link);
    setActive(name);
  };
  return (
    <GlobalContext.Provider value={{ baseUrl, navigate }}>
      {children}
    </GlobalContext.Provider>
  );
};
