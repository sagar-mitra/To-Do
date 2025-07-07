import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import AuthContext from "../utils/AuthContext";
import ProfilePicture from "./ProfilePicture";

const Header = () => {
  const { loginInfo } = useContext(AuthContext);
  console.log(loginInfo);

 

  return (
    <div className="mb-2 p-4 flex justify-between items-center">
      <h1 className="font-garaigit text-4xl font-bold ">tasky</h1>
      <div className="w-36 p-1 border">
        {Object.keys(loginInfo).length !== 0 ? (
          <div className="w-full flex items-center justify-between">
            <h4 className="text-sm">{loginInfo.userName}</h4>
            {/* {loginInfo.profilePhoto && <ProfilePicture file={loginInfo.profilePhoto} />} */}
          </div>
        ) : (
          <Link
            className="group/login flex gap-1 items-center justify-center py-1 px-3 rounded-lg hover:bg-[#f4f4f4]"
            to="/login"
          >
            <h3 className="font-ltsuperiorMono opacity-70 text-lg font-semibold group-hover/login:opacity-100">
              Login
            </h3>
            <MdLogin className="text-lg opacity-70 group-hover/login:opacity-100" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
