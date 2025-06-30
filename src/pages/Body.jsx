import Sidebar from "../components/Sidebar/Sidebar";
import HeroSection from "../components/Hero/HeroSection";
import HeroInput from "../components/Hero/HeroInput";

const Body = () => {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <HeroSection />
    </div>
  );
};

export default Body;
