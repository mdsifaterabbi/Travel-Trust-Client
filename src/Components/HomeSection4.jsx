import { useEffect, useRef, useState } from "react";

const HomeSection4 = () => {
  const [displayContents, setDisplayContents] = useState(false);

  const myTab = (xyz) => {
    console.log(xyz);
    const targetDiv = document.getElementById(xyz[0]);

    const otherDiv1 = document.getElementById(xyz[1]);
    const otherDiv2 = document.getElementById(xyz[2]);
    const otherDiv3 = document.getElementById(xyz[3]);

    displayContents ? setDisplayContents(false) : setDisplayContents(true);
    setDisplayContents
      ? ((targetDiv.style.display = "block"),
        (otherDiv1.style.display = "none"),
        (otherDiv2.style.display = "none"),
        (otherDiv3.style.display = "none"))
      : (targetDiv.style.display = "none");
  };

  const totalBtn = [
    {
      id: "one",
      idArray: ["one", "two", "three", "four"],
      btnText: "Visa Services",
    },
    {
      id: "two",
      idArray: ["two", "one", "three", "four"],
      btnText: "Passport Services",
    },
    {
      id: "three",
      idArray: ["three", "one", "two", "four"],
      btnText: "Legalization Services",
    },
    {
      id: "four",
      idArray: ["four", "one", "two", "three"],
      btnText: "Translation Services",
    },
  ];

  const totalTabContentDivs = [
    {
      id: "one",
      status: "block", //first div is by default block
      divTitle: "Visa Services",
      divContent:
        "Many travelers may wonder why they would need the services of travel visa agents. At Travel Visa Pro, we do more than simply provide expedited travel visas. Our team of travel experts spread across our offices in the United States, Canada and the UK have over 100 years of experience between them. We can get your visa application through the embassies and consulates with relationships forged from years of networking",
      divBG: "bg-[#003f9f]",
    },
    {
      id: "two",
      status: "hidden",
      divTitle: "Passport Services",
      divContent:
        "If you’re looking for a passport visa service provider to help you get a passport fast, try Travel Visa Pro! Planning a vacation abroad shouldn’t have to come with the stress of dealing with government offices or making sure your passport is up to date. If you need your US passport expedited, TVP can get you a renewal or new book in as little as few days!",
      divBG: "bg-[#003f9f]",
    },
    {
      id: "three",
      status: "hidden",
      divTitle: "Legalization Services",
      divContent:
        "Planning to travel abroad? Now is the time to legalize your US public documents to ensure they are valid in your destination country. Each nation has its specific legalization requirements. Not to worry though – our team has handled all types of legalizations, be it business contracts, academic certificates, or birth certificates. We’ll get your documents legalized at the state, national, and embassy levels and have them back to you in less than a week!",
      divBG: "bg-[#003f9f]",
    },
    {
      id: "four",
      status: "hidden",
      divTitle: "Translation Services",
      divContent:
        "Language barrier? No problem? Our expert team of linguists is on call and ready to break this barrier, enabling you to set your sights on more work, personal, and academic achievements. Sounds good? It gets even better. Our professional translation services span dialects and we can translate to and from most languages. Whether you are heading to Saudi Arabia or planning a tour to China, we’ve got multilingual translation experts ready to work on your documents.",
      divBG: "bg-[#003f9f]",
    },
  ];

  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap">
        <div
          className={`basis-1/1 sm:basis-1/4 md:basis-1/4 lg:basis-1/4 xl:basis-1/4 md:h-[350px] lg:h-[350px] xl:h-[350px] text-center bg-[#003f9f] `}
        >
          <div className="py-[10px] sm:py-[50px]">
            <ul>
              {totalBtn.map((btn, index) => (
                <li key={index} className="inline sm:block">
                  <button
                    onClick={() => myTab(btn.idArray)}
                    className={`btn bg-[#295eae] hover:bg-orange-500 outline-none border-none text-[#ffffff] text-left w-[80px] mx-[3px] sm:w-[100px] md:w-[160px] lg:w-[200px] text-[10px] sm:text-left sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] rounded-none my-[5px] `}
                  >
                    {btn.btnText}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="basis-1/1 sm:basis-3/4 md:basis-3/4 lg:basis-3/4 xl:basis-3/4 text-center">
          {totalTabContentDivs.map((div, index) => (
            <div
              key={index}
              id={div.id}
              className={`w-[100%] h-[350px] sm:h-[350px] md:h-[350px] lg:h-[350px] xl:h-[350px] sm:pt-[20px] md:pt-[20px] lg:pt-[20px] xl:pt-[25px] ${div.divBG} text-white ${div.status}`}
            >
              <div className="card w-[95%] sm:w-[80%] h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] xl:h-[300px] mx-auto bg-[#295eae] text-primary-content overflow-hidden">
                <div className="card-body px-[5px] sm:px-[20px]">
                  <h2 className="text-left text-[18px] sm:text-[22px] md:text-[26px] lg:text-[40px] xl:text-[50px] font-bold tracking-[2px]">
                    {div.divTitle}
                  </h2>
                  <p className="text-justify text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-semibold">
                    {div.divContent.substring(0, 350).trim()}
                    {div.divContent.length > 350 ? "........." : ""}
                  </p>
                  <div className="card-actions justify-start">
                    <button className="btn btn-sm sm:btn-sm md:btn-sm lg:btn-sm xl:btn-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeSection4;
