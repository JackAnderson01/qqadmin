import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import { UsersContextProvider } from "./context/UsersContext.jsx";
import {
  MatchesContext,
  MatchesContextProvider,
} from "./context/MatchesContext.jsx";
import { NotificationContextProvider } from "./context/NotificationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <UsersContextProvider>
          <NotificationContextProvider>
            <MatchesContextProvider>
              <App />
            </MatchesContextProvider>
          </NotificationContextProvider>
        </UsersContextProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
