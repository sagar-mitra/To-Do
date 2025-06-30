import { useContext, useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { TaskContext } from "../../utils/taskContext";
import { HiH1 } from "react-icons/hi2";

const HeroTasks = () => {
  // taskInfo from userContext
  const { taskInfo } = useContext(TaskContext);
  return (
    <div className=" p-2 flex flex-col gap-1 items-center">
      {!taskInfo ? (
        <h1>Task is empty</h1>
      ) : (
        taskInfo.map((task) => {
          const { id, taskTitle, taskDate } = task;
          return (
            <div key={id} className=" w-full py-2 ">
              <ul className=" flex w-1/2 py-1 px-2 items-center justify-between mx-auto">
                <div className="flex items-center gap-5">
                  <span>
                    <FaRegCircle />
                  </span>
                  <li className="text-base font-medium">{taskTitle}</li>
                </div>
                <span>
                  <MdDeleteOutline />
                </span>
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
};

export default HeroTasks;
