import React, { useContext } from "react";
import { FaRegCircle } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import { TaskContext } from "../../utils/taskContext";
import { toast } from "react-toastify";

const Task = ({ id, taskTitle, isCompleted}) => {
  // taskInfo from userContext
  const { taskInfo, setTaskInfo } = useContext(TaskContext);

  // Check and uncheck
  const handleToggle = (id) => {
    setTaskInfo(
      taskInfo.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            isCompleted: !e.isCompleted,
          };
        } else {
          return e;
        }
      })
    );

    !isCompleted && toast.success("Task marked as completed!")
  };

  // Delete button
  const handleDelete = (id) => {
    setTaskInfo(taskInfo.filter((e) => e.id !== id));
  toast.error("Task deleted")
  };

  return (
    <div className=" w-full py-2 border-b border-[#e2e2e2]">
      <ul className=" flex w-3/4 lg:w-1/2 py-1 px-2 items-center justify-between mx-auto">
        {/* tick box, task, delete button  */}
        <div className="flex items-center gap-5">
          <span onClick={() => handleToggle(id)} className="cursor-pointer">
            {isCompleted ? (
              <BsCheckCircle className="text-2xl text-blue-700" />
            ) : (
              <FaRegCircle className="text-2xl" />
            )}
          </span>
          <li
            className={`text-lg font-medium ${isCompleted && "line-through"}`}
          >
            {taskTitle}
          </li>
        </div>
        <span
          className="p-1 rounded-full hover:bg-[#f4f4f4] cursor-pointer"
          onClick={() => handleDelete(id)}
        >
          <MdDeleteOutline className="text-xl text-red-500" />
        </span>
      </ul>
    </div>
  );
};

export default Task;
