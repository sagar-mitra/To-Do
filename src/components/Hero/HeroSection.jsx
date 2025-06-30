import { useState } from "react";
import HeroHeader from "./HeroHeader";
import HeroInput from "./HeroInput";
import HeroTasks from "./HeroTasks";

const HeroSection = () => {
  return (
    <div className="border h-[640px] rounded p-2 w-4/5 flex flex-col">
      <HeroHeader />
      <HeroInput />
      <HeroTasks />
    </div>
  );
};

export default HeroSection;
