import React, { useContext } from "react";
import { TaskContext } from "../utils/taskContext";
import Task from "../components/Hero/Task";
import Sidebar from "../components/Sidebar/Sidebar";

const Upcoming = () => {
  const { taskInfo, setTaskInfo } = useContext(TaskContext);

  const today = new Date();
  let date = today.getDate();

  const notTodayData = taskInfo.filter((e) => {
    let d1 = new Date(e.taskDate);

    return d1.getDate() !== date;
  })

  return (
    <div className="text-black flex gap-4">
      <Sidebar />
      <div className="border h-[640px] rounded p-2 w-4/5">
        <h1 className="text-3xl font-semibold  mb-2 border-b py-4">
          Upcoming Tasks
        </h1>
        {notTodayData.map((task) => {
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

export default Upcoming;
