import { useContext } from "react";
import { FaRegCircle } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { TaskContext } from "../../utils/taskContext";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const HeroTasks = () => {
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
  };

  return (
    <div className=" p-2 flex flex-col gap-1 items-center overflow-y-auto">
      {taskInfo.length === 0 ? (
        <h1 className="text-lg mt-10">
          Your to-do list is as empty as your fridge on a Sunday night.
        </h1>
      ) : (
        taskInfo.map((task) => {
          const { id, taskTitle, taskDate, isCompleted } = task;
          return (
            <div key={id} className=" w-full py-2 border-b border-[#e2e2e2]">
              <ul className=" flex w-1/2 py-1 px-2 items-center justify-between mx-auto">
                <div className="flex items-center gap-5">
                  <span
                    onClick={() => handleToggle(id)}
                    className="cursor-pointer"
                  >
                    {isCompleted ? (
                      <IoMdCheckmarkCircleOutline className="text-xl" />
                    ) : (
                      <FaRegCircle className="text-xl" />
                    )}
                  </span>
                  <li
                    className={`text-lg font-medium ${
                      isCompleted && "line-through"
                    }`}
                  >
                    {taskTitle}
                  </li>
                </div>
                <span className="p-1 rounded-full hover:bg-[#f4f4f4] cursor-pointer">
                  <MdDeleteOutline className="text-lg text-red-500" />
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
