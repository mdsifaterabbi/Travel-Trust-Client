import Hero from "../Components/Hero";
import HomeSection2 from "../Components/HomeSection2";
import Menu from "../Components/Menu";

const HomePage = () => {
  return (
    <>
      <div className="w-[100vw] md:w-[90vw] border-[2px] border-red-500 mx-auto py-[10px]">
        <Menu />
      </div>
      <div className="">
        <Hero />
      </div>
      <div className="xl:w-[95vw] mx-auto">
        <div className="xl:w-[50vw] mx-auto">
          <HomeSection2 />
        </div>
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
