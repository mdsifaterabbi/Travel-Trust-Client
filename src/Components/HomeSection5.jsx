import { BsArrowRight } from "react-icons/bs";
const HomeSection5 = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="lg:basis-[40%] xl:basis-[40%] lg:pt-[100px] xl:py-[50px]">
          <div className="flex justify-center">
            <img
              src="./homePage/visa_processing.png"
              alt="visa_processing"
              className="lg:w-[280px] xl:w-[300px]"
            ></img>
          </div>
        </div>
        <div className="lg:basis-[60%] xl:basis-[60%]">
          <div className="flex lg:flex-col xl:flex-col flex-wrap">
            <div className="lg:basis-[100%] xl:basis-[100%] lg:h-[200px] xl:h-[225px] flex lg:flex-row xl:flex-row gap-2">
              <div className="lg:basis-[40%] xl:basis-[30%] bg-[#003f9f] rounded-2xl">
                <h1 className="text-white lg:text-[20px] xl:text-[24px] lg:px-[10px] lg:pt-[50px] xl:px-[5px] xl:pt-[20px] text-center">
                  Easy Work Process & solutions
                </h1>
                <BsArrowRight className="text-white w-[50px] h-[50px] mx-auto" />
              </div>
              <div className="relative top-0 left-0 lg:basis-[60%] xl:basis-[70%] bg-[#e5f0ff] rounded-2xl overflow-hidden">
                <div className="relative top-[50%] left-0 translate-y-[-50%]">
                  <p className="text-[#003f9f] font-bold lg:text-[16px] xl:text-[18px] text-center">
                    Review requirements
                  </p>
                  <p className="text-[#1d55ab] lg:text-[16px] xl:text-[18px] text-center lg:px-[30px] xl:px-[30px]">
                    Browse passport and visa requirements, make selections and
                    place your order online in just minutes
                  </p>
                </div>
                <div className="absolute bottom-[0px] left-[0px] w-[50px] h-[50px] bg-[#003f9f]">
                  <p className="text-white absolute top-[15px] right-[20px] font-bold">
                    01
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:basis-[100%] xl:basis-[100%] flex lg:flex-row xl:flex-row gap-2 mt-[10px]">
              <div className="relative top-0 left-0 lg:basis-[48%] xl:basis-[45%] lg:h-[200px] xl:h-[215px] rounded-2xl bg-[#e5f0ff] overflow-hidden">
                <div className="relative top-[50%] left-0 translate-y-[-50%]">
                  <p className="text-[#003f9f] font-bold lg:text-[16px] xl:text-[18px] text-center">
                    Provide documents
                  </p>
                  <p className="text-[#1d55ab] lg:text-[16px] xl:text-[18px] text-center lg:px-[20px] xl:px-[10px]">
                    Send in the required items and we will process your request
                    with the government
                  </p>
                </div>
                <div className="absolute lg:bottom-[0px] left-[0px] w-[50px] h-[50px] bg-[#003f9f]">
                  <p className="text-white absolute top-[15px] right-[20px] font-bold">
                    02
                  </p>
                </div>
              </div>
              <div className="relative top-0 left-0 lg:basis-[48%] xl:basis-[45%] lg:h-[200px] xl:h-[215px] rounded-2xl bg-[#e5f0ff] overflow-hidden">
                <div className="relative top-[50%] left-0 translate-y-[-50%]">
                  <p className="text-[#003f9f] font-bold lg:text-[16px] xl:text-[18px] text-center">
                    Receive passport or visa
                  </p>
                  <p className="text-[#1d55ab] lg:text-[16px] xl:text-[18px] text-center lg:px-[20px] xl:px-[10px]">
                    As soon as the government issues yourr documents, we’ll
                    return them to you so u can travel
                  </p>
                </div>
                <div className="absolute lg:bottom-[0px] left-[0px] w-[50px] h-[50px] bg-[#003f9f] ">
                  <p className="text-white absolute top-[15px] right-[20px] font-bold">
                    03
                  </p>
                </div>
              </div>
              <div className="lg:basis-[3%] xl:basis-[10%] bg-[#003f9f] rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection5;
