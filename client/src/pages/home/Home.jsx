import { router } from "../../assets";
import CompaniesProfileSlider from "../../components/slider/CompaniesProfileSlider";
import HeroSlider from "../../components/slider/HeroSlider";

import ConnectionSupport from "./ConnectionSupport";
import HomeTabs from "./HomeTabs";
import SpeedMeter from "./SpeedMeter";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <HomeTabs />
      {/* <InternetPackages /> */}
      <SpeedMeter />
      <img src={router} alt="" />
      <ConnectionSupport />
      <CompaniesProfileSlider />
    </div>
  );
};

export default Home;
