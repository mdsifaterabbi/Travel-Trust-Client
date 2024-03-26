import Hero from "../Components/Hero";
import HomeSection2 from "../Components/HomeSection2";
import HomeSection3 from "../Components/HomeSection3";
import HomeSection4 from "../Components/HomeSection4";
import HomeSection5 from "../Components/HomeSection5";
import Menu from "../Components/Menu";

const HomePage = () => {
  return (
    <>
      <div className="w-[100vw] md:w-[90vw] mx-auto py-[10px]">
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

      <div className="w-[98vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] xl:w-[70vw] mx-auto">
        <HomeSection5 />
      </div>

      <div className="w-[100vw] md:w-[90vw] border-[2px] border-red-500 mx-auto py-[200px] mt-[20px]">
        <h1>This is home page</h1>
        <p>Welcome to Travel Trust</p>
        <span className="text-green-500">Bring The Happyness</span>
      </div>
    </>
  );
};

export default HomePage;
