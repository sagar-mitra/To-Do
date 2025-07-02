import React, { useState } from "react";
import AppLayout from "./components/AppLayout";
import { TaskContext } from "./utils/taskContext";
import {
  getLocalStorageForTask,
  setLocalStorageForTask,
} from "./utils/localStorage";
import AuthContext from "./utils/AuthContext";

const App = () => {
  const [taskInfo, setTaskInfo] = useState(() => getLocalStorageForTask());
  const [loginInfo, setLoginInfo] = useState({});

  // Set storage for tasks
  setLocalStorageForTask(taskInfo);

  return (
    <div className="font-satoshi">
      <TaskContext.Provider value={{ taskInfo, setTaskInfo }}>
        <AuthContext.Provider value={{loginInfo, setLoginInfo}}>
          <AppLayout />
        </AuthContext.Provider>
      </TaskContext.Provider>
    </div>
  );
};

export default App;
