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


  return (
    <div className="p-3 h-48 w-full mt-2 flex flex-col justify-evenly ">
      <p className="text-xs font-semibold tracking-wider">TASKS</p>
      <Link to="/" className="group/tasks flex py-2 px-5 justify-between items-center cursor-pointer rounded hover:bg-gray-200  duration-200">
        <div className="flex gap-1.5 items-center" >
          <LuLayoutDashboard className="text-lg text-blue-500" />
          <h3 className="text-base font-medium opacity-60 group-hover/tasks:opacity-100">Dashboard</h3>
        </div>
        <p className=" opacity-60">{taskForToday.length + upComingTask.length}</p>
      </Link>
      <Link to="/today" className="group/tasks flex py-2 px-5 rounded justify-between items-center cursor-pointer hover:bg-gray-200  duration-200">
        <div className="flex gap-1.5 items-center">
          <BsCalendarDate className="text-lg text-green-600"/>
          <h3 className="text-base font-medium opacity-60 group-hover/tasks:opacity-100">Today</h3>
        </div>
        <p className=" opacity-60">{taskForToday.length}</p>
      </Link>
      <Link to="/upcoming" className="group/tasks  flex py-2 px-5 rounded justify-between items-center cursor-pointer hover:bg-gray-200  duration-200">
        <div className="flex gap-1.5 items-center">
          <MdOutlineCalendarMonth className="text-lg text-purple-600"/>
          <h3 className="text-base font-medium opacity-60 group-hover/tasks:opacity-100">Upcoming</h3>
        </div>
        <p className=" opacity-60 ">{upComingTask.length}</p>
      </Link>
    </div>
  );
};

export default SidebarTasks;
