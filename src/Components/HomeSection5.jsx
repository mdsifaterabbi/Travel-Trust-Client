import { BsArrowRight } from "react-icons/bs";
const HomeSection5 = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="basis-[40%] py-[50px]">
          <div className="flex justify-center">
            <img
              src="./homePage/visa_processing.png"
              alt="visa_processing"
              className="w-[300px]"
            ></img>
          </div>
        </div>
        <div className="basis-[60%]">
          <div className="flex flex-col flex-wrap">
            <div className="basis-[100%] h-[225px] flex flex-row gap-2">
              <div className="basis-[30%] bg-[#003f9f] rounded-2xl">
                <h1 className="text-white text-[30px] px-[30px] pt-[20px] text-center">
                  Easy Work Process & solutions
                </h1>
                <BsArrowRight className="text-white w-[50px] h-[50px] mx-auto" />
              </div>
              <div className="basis-[70%] bg-[#e5f0ff] rounded-2xl overflow-hidden">
                <div className="relative top-[50%] left-0 translate-y-[-50%]">
                  <p className="text-[#003f9f] font-bold text-[18px] text-center">
                    Review requirements
                  </p>
                  <p className="text-[#1d55ab] text-[18px] text-center px-[100px]">
                    Browse passport and visa requirements, make selections and
                    place your order online in just minutes
                  </p>
                </div>
                <div className="relative bottom-[-60px] left-[-50px] w-[100px] h-[100px] bg-[#003f9f] rounded-full">
                  <p className="text-white absolute top-[15px] right-[20px] font-bold">
                    01
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[100%] flex flex-row gap-2 mt-[10px]">
              <div className="basis-[45%] h-[215px] bg-[#e5f0ff] overflow-hidden">
                <div className="relative top-[50%] left-0 translate-y-[-50%]">
                  <p className="text-[#003f9f] font-bold text-[18px] text-center">
                    Provide documents
                  </p>
                  <p className="text-[#1d55ab] text-[18px] text-center px-[40px]">
                    Send in the required items and we will process your request
                    with the government
                  </p>
                </div>
                <div className="relative bottom-[-60px] left-[-50px] w-[100px] h-[100px] bg-[#003f9f] rounded-full">
                  <p className="text-white absolute top-[15px] right-[20px] font-bold">
                    02
                  </p>
                </div>
              </div>
              <div className="basis-[45%] h-[215px] bg-[#e5f0ff] overflow-hidden">
                <div className="relative top-[50%] left-0 translate-y-[-50%]">
                  <p className="text-[#003f9f] font-bold text-[18px] text-center">
                    Receive passport or visa
                  </p>
                  <p className="text-[#1d55ab] text-[18px] text-center px-[40px]">
                    As soon as the government issues your documents, we’ll
                    return them to you so you can travel
                  </p>
                </div>
                <div className="relative bottom-[-60px] left-[-50px] w-[100px] h-[100px] bg-[#003f9f] rounded-full">
                  <p className="text-white absolute top-[15px] right-[20px] font-bold">
                    03
                  </p>
                </div>
              </div>
              <div className="basis-[10%] bg-[#003f9f] rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection5;
