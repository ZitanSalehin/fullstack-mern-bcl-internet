import CompaniesProfileSlider from "../../components/slider/CompaniesProfileSlider";
import HeroSlider from "../../components/slider/HeroSlider";

import ConnectionSupport from "./ConnectionSupport";
import HomeTabs from "./HomeTabs";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <HomeTabs />
      {/* <InternetPackages /> */}

      <ConnectionSupport />
      <CompaniesProfileSlider />
    </div>
  );
};

export default Home;
