import { FaSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SidebarLists = () => {
  return (
    <div className="p-3 h-48 w-full mt-2 flex flex-col justify-evenly ">
      <p className="text-xs font-semibold tracking-wider">LISTS</p>
      <div className="group/lists flex py-2 px-5 justify-between items-center rounded hover:bg-gray-200  duration-200">
        <Link className="flex gap-1.5 items-center" to="/">
          <FaSquare className="text-lg text-sky-400" />
          <h3 className="text-base font-medium opacity-60 group-hover/lists:opacity-100">Personal</h3>
        </Link>
        <p className=" opacity-60">4</p>
      </div>
      <div className="group/lists flex py-2 px-5 justify-between items-center rounded hover:bg-gray-200  duration-200">
        <Link className="flex gap-1.5 items-center" to="/today">
          <FaSquare className="text-lg text-indigo-400" />
          <h3 className="text-base font-medium opacity-60 group-hover/lists:opacity-100">Work</h3>
        </Link>
        <p className=" opacity-60">4</p>
      </div>
      <div className="group/lists flex py-2 px-5 justify-between items-center rounded hover:bg-gray-200  duration-200">
        <Link className="flex gap-1.5 items-center" to="/upcoming">
          <FaSquare className="text-lg text-rose-600" />
          <h3 className="text-base font-medium opacity-60 group-hover/lists:opacity-100 ">Important</h3>
        </Link>
        <p className=" opacity-60">4</p>
      </div>
    </div>
  );
};

export default SidebarLists;
