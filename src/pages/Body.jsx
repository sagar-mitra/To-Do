import Sidebar from "../components/Sidebar/Sidebar";
import HeroSection from "../components/Hero/HeroSection";
import HeroInput from "../components/Hero/HeroInput";

const Body = () => {
  return (
    <div className="w-screen p-2 h-screen xs:h-[calc(100vh-80px)] sm:flex sm:gap-4" >
      <Sidebar />
      <HeroSection />
    </div>
  );
};

export default Body;
