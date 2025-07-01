import React, { useContext } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { TaskContext } from "../utils/taskContext";
import Task from "../components/Hero/Task";

const TodayList = () => {
  const { taskInfo, setTaskInfo } = useContext(TaskContext);

  const today = new Date();
  let date = today.getDate();
  

  const todayData = taskInfo.filter((e) => {
    const d1 = new Date(e.taskDate);
    return d1.getDate() === date;
  });
  

  return (
    <div className="text-black flex gap-4">
      <Sidebar />
      <div className="border h-[640px] rounded p-2 w-4/5">
        <h1 className="text-3xl font-semibold mt-10 pl-5 mb-2 border-b py-4">
          What’s on Your Plate Today?
        </h1>
        {todayData.map((task) => {
          const { id, taskTitle, taskDate, isCompleted } = task;
          return (
            <Task
              key={id}
              id={id}
              taskTitle={taskTitle}
              isCompleted={isCompleted}
              taskInfo={taskInfo}
              setTaskInfo={setTaskInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodayList;
