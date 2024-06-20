import React, { createContext, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import Cookies from "js-cookie";

export const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
  return (
    <NotificationContext.Provider value={{}}>
      {children}
    </NotificationContext.Provider>
  );
};
