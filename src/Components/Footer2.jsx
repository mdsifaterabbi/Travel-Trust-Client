const Footer2 = () => {
  return (
    <>
      <div className="flex sm:flex-row md:flex-row lg:flex-row xl:flex-row flex-wrap bg-[#d1e3ff] xl:w-[70vw] mx-auto">
        <div className="sm:basis-[100%] md:basis-[40%] lg:basis-[40%] xl:basis-[40%]">
          <div className="md:pb-[30px]">
            <img
              src="./homePage/TravelTrustLogo.png"
              alt="TravelTrustLogo"
              className="mx-auto mt-[60px] mb-[20px]"
            ></img>
            <p className="px-[20px] text-[13px] sm:text-[14px] md:text-[16px] text-justify font-semibold">
              Travel Visa Pro is a registered hand-carry service with the U.S.
              Dept of State Bureau of Consular Affairs Passport Services. Travel
              Visa Pro provides form completion and courier services based on
              your input and Dept of State and foreign consulates/embassies’
              instructions, but does not provide legal advice. Please seek a
              licensed legal advisor for any legal advice specific to your
              needs.
            </p>
          </div>
        </div>
        {/* ========== Only for extra small and small device ============ */}
        <div className="flex mx-auto w-[90vw] sm:w-[70vw] md:hidden mt-[20px] sm:mt-[10px]">
          <div className="basis-[32%] md:basis-[20%] lg:basis-[20%] xl:basis-[20%] sm:mt-[20px] md:mt-[60px] mb-[20px]">
            <div className="pl-[0px] sm:pl-[20px] md:mt-[100px]">
              <p className="text-left font-bold text-[14px] sm:text-[16px]">Quick Links</p>
              <ul className="text-[14px] sm:text-[16px]">
                <li className="my-[5px]">About Us</li>
                <li className="my-[5px]">Contact Us</li>
                <li className="my-[5px]">Corporate Accounts</li>
                <li className="my-[5px]">VIP Services</li>
              </ul>
            </div>
          </div>
          <div className="basis-[32%] md:basis-[20%] lg:basis-[20%] xl:basis-[20%] sm:mt-[20px] md:mt-[60px] mb-[20px]">
            <div className="pl-[0px] sm:pl-[20px] md:mt-[100px]">
              <p className="text-left font-bold text-[14px] sm:text-[16px]">Quick Links</p>
              <ul className="text-[14px] sm:text-[16px]">
                <li className="my-[5px]">Review</li>
                <li className="my-[5px]">Privacy</li>
                <li className="my-[5px]">Terms</li>
                <li className="my-[5px]">Payment</li>
              </ul>
            </div>
          </div>
          <div className="basis-[32%] md:basis-[20%] lg:basis-[20%] xl:basis-[20%] sm:mt-[20px] md:mt-[60px] mb-[20px]">
            <div className="pl-[0px] sm:pl-[20px] md:mt-[100px]">
              <p className="text-left font-bold text-[14px] sm:text-[16px]">Get Social</p>
              <ul className="text-[14px] sm:text-[16px]">
                <li className="my-[5px]">Facebook</li>
                <li className="my-[5px]">Youtube</li>
                <li className="my-[5px]">Twitter</li>
                <li className="my-[5px]">LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ============= For md, lg and xl device ============ */}
        <div className="hidden md:block md:basis-[20%] lg:basis-[20%] xl:basis-[20%] sm:mt-[20px] md:mt-[60px] mb-[20px]">
          <div className="pl-[20px] md:mt-[100px]">
            <p className="text-left font-bold text-[16px]">Quick Links</p>
            <ul className="">
              <li className="my-[5px]">About Us</li>
              <li className="my-[5px]">Contact Us</li>
              <li className="my-[5px]">Corporate Accounts</li>
              <li className="my-[5px]">VIP Services</li>
            </ul>
          </div>
        </div>
        {/* ============= For md, lg and xl device ============ */}
        <div className="hidden md:block md:basis-[20%] lg:basis-[20%] xl:basis-[20%] sm:mt-[20px] md:mt-[60px] mb-[20px]">
          <div className="pl-[20px] md:mt-[100px]">
            <p className="text-left font-bold text-[16px]">Quick Links</p>
            <ul className="">
              <li className="my-[5px]">Review</li>
              <li className="my-[5px]">Privacy</li>
              <li className="my-[5px]">Terms</li>
              <li className="my-[5px]">Payment</li>
            </ul>
          </div>
        </div>
        {/* ============= For md, lg and xl device ============ */}
        <div className="hidden md:block md:basis-[20%] lg:basis-[20%] xl:basis-[20%] sm:mt-[20px] md:mt-[60px] mb-[20px]">
          <div className="pl-[20px] md:mt-[100px]">
            <p className="text-left font-bold text-[16px]">Lets Get Social</p>
            <ul className="">
              <li className="my-[5px]">Facebook</li>
              <li className="my-[5px]">Youtube</li>
              <li className="my-[5px]">Twitter</li>
              <li className="my-[5px]">LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
