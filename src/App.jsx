import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyOtp from "./pages/VerifyOtp";
import ChangePassword from "./pages/ChangePassword";
import Dashboard from "./pages/Dashboard";
import GlobalLayout from "./layout/GlobalLayout";
import Users from "./pages/Users";
import Notifications from "./pages/Notifications";
import Subscription from "./pages/Subscription";
import Revenue from "./pages/Revenue";
import Matches from "./pages/Matches";
import Reports from "./pages/Reports";
import UpdatePassword from "./pages/UpdatePassword";
import ReportedUser from "./pages/ReportedUser";
import LocationTrends from "./pages/LocationTrends";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route
        path="/update-password"
        element={<GlobalLayout page={<UpdatePassword />} />}
      />

      <Route
        path="/dashboard"
        element={<GlobalLayout page={<Dashboard />} />}
      />
      <Route path="/users" element={<GlobalLayout page={<Users />} />} />
      <Route
        path="/notifications"
        element={<GlobalLayout page={<Notifications />} />}
      />
      <Route
        path="/locations"
        element={<GlobalLayout page={<LocationTrends />} />}
      />
      {/* <Route
        path="/subscriptions"
        element={<GlobalLayout page={<Subscription />} />}
      /> */}
      <Route path="/reports" element={<GlobalLayout page={<Reports />} />} />
      <Route
        path="/reporteduser"
        element={<GlobalLayout page={<ReportedUser />} />}
      />
      {/* <Route path="/revenue" element={<GlobalLayout page={<Revenue />} />} /> */}

      <Route path="/reports" element={<GlobalLayout page={<Reports />} />} />
      <Route path="/matches" element={<GlobalLayout page={<Matches />} />} />
    </Routes>
  );
}

export default App;
