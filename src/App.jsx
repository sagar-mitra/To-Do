import React, { useState } from "react";
import AppLayout from "./components/AppLayout";
import { TaskContext } from "./utils/taskContext";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [taskInfo, setTaskInfo] = useState(() => getLocalStorage());

  setLocalStorage(taskInfo);

  return (
    <div className="font-satoshi">
      <TaskContext.Provider value={{ taskInfo, setTaskInfo }}>
        <AppLayout />
      </TaskContext.Provider>
    </div>
  );
};

export default App;
