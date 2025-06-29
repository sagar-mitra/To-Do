import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Body from "../pages/Body";
import Header from "./Header";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="p-2">
      <Header />
      <Sidebar/>
      {/* <Body /> */}
      {/* <Outlet /> */}
    </div>
  );
};

export default AppLayout;
