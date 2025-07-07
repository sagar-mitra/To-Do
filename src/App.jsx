import React, { useState } from "react";
import AppLayout from "./components/AppLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TaskContext } from "./utils/taskContext";
import {
  getLocalStorageForTask,
  setLocalStorageForAuth,
  setLocalStorageForTask,
} from "./utils/localStorage";
import AuthContext from "./utils/AuthContext";

const App = () => {
  const [taskInfo, setTaskInfo] = useState(() => getLocalStorageForTask());
  const [loginInfo, setLoginInfo] = useState(() => {
    const data = localStorage.getItem("userInfo");
    return data !== null ? JSON.parse(data) : {};
  });

  // Set storage for tasks
  setLocalStorageForTask(taskInfo);

  setLocalStorageForAuth(loginInfo);

  return (
    <div className="font-satoshi">
      <TaskContext.Provider value={{ taskInfo, setTaskInfo }}>
        <AuthContext.Provider value={{ loginInfo, setLoginInfo }}>
          <AppLayout />
          <ToastContainer position="top-center" autoClose={2000} theme="dark" />
        </AuthContext.Provider>
      </TaskContext.Provider>
    </div>
  );
};

export default App;
