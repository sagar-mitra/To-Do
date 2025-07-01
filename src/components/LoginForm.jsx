import React, { useState } from "react";

const LoginForm = () => {
    const [fullName, setFullname] = useState("");
    const [userName, setUserName] = useState("");
    const [emailID, setEmailID] = useState("");
    const [profilePhoto, setProfilePhoto] = useState();
    

  return (
    <section class="bg-[#f4f4f4] w-[480px] py-10 px-4 rounded-lg ">
      <div class="container flex items-center justify-center">
        <form class="w-full ">
          <div class="flex items-center justify-center ">
            <h4 className="text-2xl font-semibold">Log Into Your Tasks</h4>
          </div>

          <div class="relative flex items-center mt-8">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              class="block font-medium w-full py-3 text-gray-700 bg-white border rounded-lg px-11   focus:border-blue-400 l focus:ring-blue-300 focus:outline-none"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div class="relative flex items-center mt-8">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   focus:border-blue-400 l focus:ring-blue-300 focus:outline-none"
              placeholder="Username"
            />
          </div>

          <div class="relative flex items-center mt-6">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none"
              placeholder="Email address"
            />
          </div>

          <label
            for="dropzone-file"
            class="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border border-dashed rounded-lg cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>

            <h2 class="mx-3 text-gray-400">Profile Photo</h2>

            <input id="dropzone-file" type="file" class="hidden" />
          </label>

          <div class="mt-6">
            <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
