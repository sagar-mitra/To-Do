import { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

const HeroTasks = ({ data }) => {
  console.log(data);
  return (
    <div className=" p-2 flex flex-col gap-1 items-center">
      {data.map((task) => {
        const { id, taskTitle, taskDate } = task;
        return (
          <div className=" w-full py-2 ">
            <ul
              key={id}
              className=" flex w-1/2 py-1 px-2 items-center justify-between mx-auto"
            >
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
      })}
    </div>
  );
};

export default HeroTasks;
