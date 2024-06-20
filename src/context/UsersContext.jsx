import React, { createContext, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import Cookies from "js-cookie";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  return <UsersContext.Provider value={{}}>{children}</UsersContext.Provider>;
};
