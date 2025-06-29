import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";


const SidebarTasks = () => {
  return (
    <div className="p-3 h-48 w-full mt-2 flex flex-col justify-evenly ">
      <p className="text-xs font-semibold tracking-wider">TASKS</p>
      <div className="group/tasks flex py-2 px-5 justify-between items-center cursor-pointer rounded hover:bg-gray-200  duration-200">
        <Link className="flex gap-1.5 items-center" to="/">
          <LuLayoutDashboard className="text-lg text-blue-500" />
          <h3 className="text-base font-medium opacity-60 group-hover/tasks:opacity-100">Dashboard</h3>
        </Link>
        <p className=" opacity-60">4</p>
      </div>
      <div className="group/tasks flex py-2 px-5 rounded justify-between items-center cursor-pointer hover:bg-gray-200  duration-200">
        <Link className="flex gap-1.5 items-center" to="/today">
          <BsCalendarDate className="text-lg text-green-600"/>
          <h3 className="text-base font-medium opacity-60 group-hover/tasks:opacity-100">Today</h3>
        </Link>
        <p className=" opacity-60">4</p>
      </div>
      <div className="group/tasks  flex py-2 px-5 rounded justify-between items-center cursor-pointer hover:bg-gray-200  duration-200">
        <Link className="flex gap-1.5 items-center" to="/upcoming">
          <MdOutlineCalendarMonth className="text-lg text-purple-600"/>
          <h3 className="text-base font-medium opacity-60 group-hover/tasks:opacity-100">Upcoming</h3>
        </Link>
        <p className=" opacity-60">4</p>
      </div>
    </div>
  );
};

export default SidebarTasks;
