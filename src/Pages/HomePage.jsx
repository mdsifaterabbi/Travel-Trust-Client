import Hero from "../Components/Hero";
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
      <div className="w-[100vw] md:w-[90vw] border-[2px] border-red-500 mx-auto py-[500px] mt-[20px]">
        <h1>This is home page</h1>
        <p>Welcome to Travel Trust</p>
        <span className="text-green-500">Bring The Happyness</span>
      </div>
    </>
  );
};

export default HomePage;
