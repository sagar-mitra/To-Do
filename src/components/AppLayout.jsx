import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Body from "../pages/Body";
import Header from "./Header";
import { Outlet, useLocation } from "react-router";

const AppLayout = () => {
  // Hide header component in login page
  const location = useLocation();
  const hideHeader = location.pathname === "/login";
  return (
    <div className="p-2">
      {!hideHeader && <Header />}
      <Outlet />
    </div>
  );
};

export default AppLayout;
