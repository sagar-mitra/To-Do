import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

const SidebarSearch = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className=" flex flex-col p-3 items-center gap-8">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-lg font-semibold tracking-wide">Menu</h2>
        <RxHamburgerMenu className="text-lg font-semibold cursor-pointer" />
      </div>
      <div className="w-full py-0.5 px-5 flex items-center gap-2">
        <IoSearchOutline className="text-lg font-medium" />
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          className="focus:outline-none w-full font-medium tracking-wide"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SidebarSearch;
