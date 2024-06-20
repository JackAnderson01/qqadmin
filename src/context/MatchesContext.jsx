import React, { createContext, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import Cookies from "js-cookie";

export const MatchesContext = createContext();

export const MatchesContextProvider = ({ children }) => {
  return (
    <MatchesContext.Provider value={{}}>{children}</MatchesContext.Provider>
  );
};
