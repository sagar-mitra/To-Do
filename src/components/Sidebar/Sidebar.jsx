import { useState } from "react";
import { Link } from "react-router-dom";
import { RiListSettingsFill } from "react-icons/ri";
import SidebarTasks from "./SidebarTasks.jsx";
import SidebarSearch from "./SidebarSearch.jsx";
import SidebarLists from "./SidebarLists.jsx";

const Sidebar = () => {
  const [burgerMenuClicked, setBurgerMenuClicked] = useState(false)
  return (
    <div className="hidden lg:block rounded-lg w-1/5 h-full   p-2 bg-[#f4f4f4]">
      <SidebarSearch  setBurgerMenuClicked={setBurgerMenuClicked} />

      <SidebarTasks />

      <SidebarLists />

      {/* lower part */}
      <div className="group/setting p-3">
        <Link className="flex gap-1.5 items-center py-2 px-5">
          <RiListSettingsFill className="text-lg" />
          <h3 className="text-base font-medium opacity-60 group-hover/setting:opacity-100">Settings</h3>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
