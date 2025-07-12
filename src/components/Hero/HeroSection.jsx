
import HeroHeader from "./HeroHeader";
import HeroInput from "./HeroInput";
import HeroTasks from "./HeroTasks";

const HeroSection = () => {

  

  return (
    <div className="p-2 w-full lg:w-4/5 h-full flex flex-col bg-pr">
      <HeroHeader />
      <HeroInput />
      <HeroTasks />
    </div>
  );
};

export default HeroSection;
