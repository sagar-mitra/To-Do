import React from "react";
import loginIMG from "../assets/loginIMG.jpg";
import { FaRegUser } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import LoginForm from "../components/LoginForm";
import ProfilePicture from "../components/ProfilePicture";

const Login = () => {
  return (
    <div className="flex p-3 justify-between items-center h-[720px]">
      {/* left side */}
      <div className=" w-[50%]">
        <img className="h-[600px]" src={loginIMG} alt="" />
      </div>
      {/* right side */}
      <div className=" w-[50%] flex justify-center items-center flex-col gap-20">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
