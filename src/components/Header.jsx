import React from "react";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const Header = () => {
  return (
    <div className="mb-2 p-4 flex justify-between items-center">
      <h1 className="font-garaigit text-4xl font-bold ">tasky</h1>
      <div className="w-30 p-1">
        <Link className="group/login flex gap-1 items-center justify-center py-1 px-3 rounded-lg hover:bg-[#f4f4f4]" to="/login">
          <h3 className="font-ltsuperiorMono opacity-70 text-lg font-semibold group-hover/login:opacity-100">
            Login
          </h3>
          <MdLogin className="text-lg opacity-70 group-hover/login:opacity-100" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
