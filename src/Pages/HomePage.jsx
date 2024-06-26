import Footer1 from "../Components/Footer1";
import Footer2 from "../Components/Footer2";
import Footer3 from "../Components/Footer3";
import Hero from "../Components/Hero";
import HomeSection2 from "../Components/HomeSection2";
import HomeSection3 from "../Components/HomeSection3";
import HomeSection4 from "../Components/HomeSection4";
import HomeSection5 from "../Components/HomeSection5";
import Menu from "../Components/Menu";

const HomePage = () => {
  return (
    <>
      <div className="w-[98vw] mx-auto overflow-hidden">
        <div className="w-[98vw] md:w-[90vw] mx-auto py-[10px]">
          <Menu />
        </div>
        <div className="">
          <Hero />
        </div>

        <div className="w-[98vw] md:w-[98vw] lg:w-[90vw] xl:w-[70vw] mx-auto">
          <HomeSection2 />
        </div>

        <div className="w-[80vw] mx-auto py-[20px]">
          <HomeSection3 />
        </div>

        <div className="w-[98vw] sm:w-[98vw] md:w-[98vw] lg:w-[90vw] xl:w-[85vw] mx-auto my-[50px]">
          <HomeSection4 />
        </div>

        <div className="w-[98vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] xl:w-[70vw] mx-auto mb-[50px]">
          <HomeSection5 />
        </div>

        <div className="w-[90vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[70vw] mx-auto">
          <Footer1 />
        </div>
        <div className="w-[98vw] mx-auto mt-[-50px] sm:mt-[-50px] md:mt-[-50px] lg:mt-[-50px] xl:mt-[-50px] bg-[#d1e3ff] block sm:block md:block lg:block xl:block">
          <Footer2 />
        </div>
        <div className="w-[98vw] mx-auto">
          <Footer3 />
        </div>
      </div>
    </>
  );
};

export default HomePage;
