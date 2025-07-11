import { useState } from "react";
import HeroHeader from "./HeroHeader";
import HeroInput from "./HeroInput";
import HeroTasks from "./HeroTasks";

const HeroSection = () => {
  return (
    <div className="border-2 rounded p-2 sm:w-4/5 flex flex-col border-orange-500">
      <HeroHeader />
      <HeroInput />
      <HeroTasks />
    </div>
  );
};

export default HeroSection;
