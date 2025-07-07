import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useContext } from "react";
import { TaskContext } from "../../utils/taskContext";


const SidebarTasks = () => {

  const {taskInfo} = useContext(TaskContext);

  const today = new Date();
  let date = today.getDate();
  

  let taskForToday = taskInfo.filter((e) => {
    let d1 = new Date(e.taskDate);
    return d1.getDate() === date;
  })

  let upComingTask = taskInfo.filter((e) => {
    let d1 = new Date(e.taskDate);
    return d1.getDate() !== date;
  })

  console.log(taskForToday);
  console.log(upComingTask);


  return (
    <div className="p-3 h-48 w-full mt-2 flex flex-col justify-evenly ">
      <p className="text-xs font-semibold tracking-wider">TASKS</p>
      <div className="group/tasks flex py-2 px-5 justify-between items-center cursor-pointer rounded hover:bg-gray-200  duration-200">
        <Link className="flex gap-1.5 items-center" to="/">
          <LuLayoutDashboard className="text-lg text-blue-500" />
          <h3 className="text-base font-medium opacity-60 group-hover/tasks:opacity-100">Dashboard</h3>
        </Link>
        <p className=" opacity-60">{taskForToday.length + upComingTask.length}</p>
      </div>
      <div className="group/tasks flex py-2 px-5 rounded justify-between items-center cursor-pointer hover:bg-gray-200  duration-200">
        <Link className="flex gap-1.5 items-center" to="/today">
          <BsCalendarDate className="text-lg text-green-600"/>
          <h3 className="text-base font-medium opacity-60 group-hover/tasks:opacity-100">Today</h3>
        </Link>
        <p className=" opacity-60">{taskForToday.length}</p>
      </div>
      <div className="group/tasks  flex py-2 px-5 rounded justify-between items-center cursor-pointer hover:bg-gray-200  duration-200">
        <Link className="flex gap-1.5 items-center" to="/upcoming">
          <MdOutlineCalendarMonth className="text-lg text-purple-600"/>
          <h3 className="text-base font-medium opacity-60 group-hover/tasks:opacity-100">Upcoming</h3>
        </Link>
        <p className=" opacity-60 ">{upComingTask.length}</p>
      </div>
    </div>
  );
};

export default SidebarTasks;
