import Sidebar from "../components/Sidebar/Sidebar";
import HeroSection from "../components/Hero/HeroSection";
import HeroInput from "../components/Hero/HeroInput";

const Body = () => {
  return (
    <div className="w-screen p-2 sm:flex sm:gap-4 border-2 border-green-500 h-screen xl:h-[calc(100vh-15vh)]">
      <Sidebar />
      <HeroSection />
    </div>
  );
};

export default Body;
