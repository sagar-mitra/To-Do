import { useEffect, useId, useState } from "react";
import { MdAdd } from "react-icons/md";

const HeroInput = ({taskInfo, setTaskInfo}) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleTaskTitle = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskDate = (e) => {
    setTaskDate(e.target.value);
  };

  const handleTaskAddButton = () => {
    const randomId = crypto.randomUUID().slice(0, 8);
    const newTask = {
      id: randomId,
      taskTitle: taskTitle,
      taskDate: taskDate,
      isCompleted: false,
    };
    setTaskInfo((prev) => [...prev, newTask]);
    setTaskDate("");
    setTaskTitle("");
  };

  const handleEnterButton = (e) => {
    if (e.key === "Enter") {
      handleTaskAddButton();
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskInfo));
  }, [taskInfo]);

  return (
    <div className="py-2.5 px-10 mt-10 border-t border-b border-[#e2e2e2] flex items-center justify-center gap-7">
      <div className="p-1 flex gap-1 items-center ">
        <MdAdd
          className="text-3xl p-1 hover:bg-[#f4f4f4] rounded-full cursor-pointer"
          onClick={handleTaskAddButton}
        />
        <input
          type="text"
          placeholder="Add new task"
          value={taskTitle}
          onChange={handleTaskTitle}
          onKeyDown={handleEnterButton}
          className="p-1 w-[350px] focus:outline-none text-base font-medium tracking-wide"
        />
      </div>
      <div>
        <input
          type="date"
          placeholder="Pick a date"
          value={taskDate}
          onChange={handleTaskDate}
          className="border py-1 px-3 border-gray-400 rounded-md"
        />
      </div>
    </div>
  );
};

export default HeroInput;
