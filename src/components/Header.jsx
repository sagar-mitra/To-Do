import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import AuthContext from "../utils/AuthContext";
import ProfilePicture from "./ProfilePicture";

const Header = () => {
  const { loginInfo } = useContext(AuthContext);
  console.log(loginInfo);

  return (
    <div className="p-3 flex justify-between items-center border-b  h-20">
      <h1 className="font-garaigit text-3xl sm:text-4xl font-bold ">tasky</h1>
      <div>
        {Object.keys(loginInfo).length !== 0 ? (
          <div className="w-full flex items-center justify-between">
            {/* <h4 className="text-lg ">{loginInfo.userName}</h4> */}
            <img
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full mx-auto p-1 border-2 border-gray-500"
              src={loginInfo.profilePhoto}
              alt=""
            />
          </div>
        ) : (
          <Link
            className="group/login flex border border-black gap-1 items-center justify-center py-1 px-2 lg:px-3 rounded-lg  hover:bg-blue-400 hover:border-blue-400 hover:text-white hover:font-medium duration-300 "
            to="/login"
          >
            <MdLogin className="md:text-lg opacity-70 group-hover/login:opacity-100 duration-200" />
            <h3 className="opacity-70 md:text-lg font-semibold group-hover/login:opacity-100 duration-200">
              Login
            </h3>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
