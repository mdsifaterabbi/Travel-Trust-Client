import AboutHero from "../Components/AboutComponents/AboutHero";
import Menu from "../Components/Menu";

const AboutPage = () => {
  return (
    <>
      <div className="w-[98vw] mx-auto py-[10px] bg-[#ffffff]">
        <Menu />
      </div>
      <div className="w-[98vw] mx-auto">
        <AboutHero />
      </div>
    </>
  );
};

export default AboutPage;
