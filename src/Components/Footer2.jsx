const Footer2 = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap bg-[#d1e3ff] xl:w-[70vw] mx-auto">
        <div className="basis-[40%]">
          <div className="pb-[30px]">
            <img
              src="./homePage/TravelTrustLogo.png"
              alt="TravelTrustLogo"
              className="mx-auto mt-[60px] mb-[20px]"
            ></img>
            <p className="px-[20px] text-[16px] text-justify font-semibold">
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
        <div className="basis-[20%] mt-[60px] mb-[20px]">
          <div className="text-left pl-[20px] mt-[100px]">
            <p className="font-bold text-[16px]">Quick Links</p>
            <ul className="">
              <li className="my-[5px]">About Us</li>
              <li className="my-[5px]">Contact Us</li>
              <li className="my-[5px]">Corporate Accounts</li>
              <li className="my-[5px]">VIP Services</li>
            </ul>
          </div>
        </div>
        <div className="basis-[20%] mt-[60px] mb-[20px]">
          <div className="text-left pl-[20px] mt-[100px]">
            <p className="font-bold text-[16px]">Quick Links</p>
            <ul className="">
              <li className="my-[5px]">Review</li>
              <li className="my-[5px]">Privacy</li>
              <li className="my-[5px]">Terms</li>
              <li className="my-[5px]">Payment</li>
            </ul>
          </div>
        </div>
        <div className="basis-[20%] border mt-[60px] mb-[20px]">
          <div className="text-left pl-[20px] mt-[100px]">
            <p className="font-bold text-[16px]">Lets Get Social</p>
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
