import { useState } from "react";
import HeroHeader from "./HeroHeader";
import HeroInput from "./HeroInput";
import HeroTasks from "./HeroTasks";

const HeroSection = () => {
  const [taskInfo, setTaskInfo] = useState([]);
  return (
    <div className="border h-[640px] rounded p-2 w-4/5 flex flex-col">
      <HeroHeader />
      <HeroInput
        taskInfo={taskInfo}
        setTaskInfo={setTaskInfo}
      />
      <HeroTasks data={taskInfo} />
    </div>
  );
};

export default HeroSection;
