import React, { useContext, useState } from "react";
import AuthContext from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";

const LoginForm = () => {
  const [fullName, setFullname] = useState("");
  const [userName, setUserName] = useState("");
  const [emailID, setEmailID] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const { loginInfo, setLoginInfo } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    const randomID = crypto.randomUUID().slice(0, 8);

    const newUser = {
      id: randomID,
      name: fullName,
      userName: userName,
      email: emailID,
      profilePhoto: profilePhoto,
    };
    setLoginInfo(newUser); // updating the auth context

    // reset the states
    setEmailID(null);
    setUserName(null);
    setFullname(null);
    setProfilePhoto(null);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  return Object.keys(loginInfo).length !== 0 ? (
    <h1> your profile is ready </h1>
  ) : (
    <section className="bg-[#f4f4f4] w-[480px] py-10 px-4 rounded-lg ">
      <div className="container flex items-center justify-center">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center ">
            <h4 className="text-2xl font-semibold">Log Into Your Tasks</h4>
          </div>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              className="block font-medium w-full py-3 text-gray-700 bg-white border rounded-lg px-11   focus:border-blue-400 l focus:ring-blue-300 focus:outline-none"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   focus:border-blue-400 l focus:ring-blue-300 focus:outline-none"
              placeholder="Username"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none"
              placeholder="Email address"
              required
              value={emailID}
              onChange={(e) => setEmailID(e.target.value)}
            />
          </div>

          <label
            htmlFor="dropzone-file"
            className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border border-dashed rounded-lg cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>

            <h2
              className={`mx-3 ${
                profilePhoto ? "text-gray-900" : "text-gray-400"
              } ${profilePhoto ? "font-medium" : ""}`}
            >
              {profilePhoto ? profilePhoto.name : "Profile Photo"}
            </h2>

            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </label>

          <div className="mt-6">
            <button
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
