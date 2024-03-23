import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HomeSection2.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={``} onClick={onClick}>
      <BsArrowRight
        className={`relative top-[-100px] left-[600px] w-[30px] h-[30px] px-[5px] ${styles.myArrow}`}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={``} onClick={onClick}>
      <BsArrowLeft
        className={`relative top-[100px] left-[-30px] w-[30px] h-[30px] px-[5px] ${styles.myArrow}`}
      />
    </div>
  );
}

const HomeSection2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settings4_XSM = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  const settings4_SM = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };

  const sliderContents = [
    {
      id: 1,
      heading: "Heading 1",
      status: true,
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum mollitia ad alias vitae...",
      footer1: "Customer",
      date: "March 23",
      footer2: "Showing our 4 & 5 start reviews",
      icons: [
        <BsStarHalf
          key="1"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="2"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="3"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="4"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="5"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
      ],
    },
    {
      id: 2,
      heading: "Heading 2",
      status: false,
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum mollitia ad alias vitae...",
      footer1: "Customer",
      date: "March 23",
      footer2: "Showing our 4 & 5 start reviews",
      icons: [
        <BsStarHalf
          key="1"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="2"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="3"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="4"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="5"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
      ],
    },
    {
      id: 3,
      heading: "Heading 3",
      status: true,
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum mollitia ad alias vitae...",
      footer1: "Customer",
      date: "March 23",
      footer2: "Showing our 4 & 5 start reviews",
      icons: [
        <BsStarHalf
          key="1"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="2"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="3"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="4"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="5"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
      ],
    },
    {
      id: 4,
      heading: "Heading 4",
      status: false,
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum mollitia ad alias vitae...",
      footer1: "Customer",
      date: "March 23",
      footer2: "Showing our 4 & 5 start reviews",
      icons: [
        <BsStarHalf
          key="1"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="2"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="3"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="4"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="5"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
      ],
    },
    {
      id: 5,
      heading: "Heading 5",
      status: true,
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum mollitia ad alias vitae...",
      footer1: "Customer",
      date: "March 23",
      footer2: "Showing our 4 & 5 start reviews",
      icons: [
        <BsStarHalf
          key="1"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="2"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="3"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="4"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
        <BsStarHalf
          key="5"
          className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px]"
        />,
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row md:flex-wrap">
        <div className="basis-1/1 md:basis-1/1 lg:basis-1/4 xl:basis-1/4">
          <div className="">
            <h1 className="text-center py-[10px] text-[20px]">Excellent</h1>
            <div className="flex gap-1 justify-center py-[5px]">
              <BsStarHalf className="bg-[#00b67a] text-white w-[30px] h-[30px] px-[5px] py-[5px]" />
              <BsStarHalf className="bg-[#00b67a] text-white w-[30px] h-[30px] px-[5px] py-[5px]" />
              <BsStarHalf className="bg-[#00b67a] text-white w-[30px] h-[30px] px-[5px] py-[5px]" />
              <BsStarHalf className="bg-[#00b67a] text-white w-[30px] h-[30px] px-[5px] py-[5px]" />
              <BsStarHalf className="bg-[#00b67a] text-white w-[30px] h-[30px] px-[5px] py-[5px]" />
            </div>
            <h5 className="text-center text-[14px] py-[10px]">
              Based on <span className="underline">2,414 reviews</span>
            </h5>
            <div className="text-center">
              <BsStarHalf className="text-[#00b67a] w-[30px] h-[30px] px-[5px] py-[5px] inline" />
              <h4 className="inline font-bold text-[20px] relative top-[5px]">
                Travel Trust
              </h4>
            </div>
          </div>
        </div>
        <div className="basis-1/1 md:basis-1/1 lg:basis-3/4 xl:basis-3/4">
          <div className="w-[98vw] md:w-[600px] lg:w-[600px] xl:w-[600px] mx-auto">
            <div className="slider-container hidden md:block lg:block xl:block">
              <Slider {...settings}>
                {sliderContents.map((sc, index) => (
                  <div key={index}>
                    <div className="flex gap-1 justify-start py-[5px]">
                      {sc.icons}
                      <span>
                        {sc.status ? (
                          <div>
                            <MdVerified className="inline w-[20px] h-[20px] mt-[5px]" />
                            <span className="relative top-[5px] left-[3px]">
                              Verified
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                    <p className="font-semibold text-[18px]">{sc.heading}</p>
                    <p className="text-[14px] pt-[5px]">{sc.paragraph}</p>
                    <span className="text-[#717172] text-[12px] font-bold">
                      {sc.footer1}
                      <span className="text-[#99999b] text-[12px] font-normal">
                        {sc.date}
                      </span>
                    </span>
                    <p className="text-[14px] pt-[5px] font-semibold">
                      {sc.footer2}
                    </p>
                  </div>
                ))}
              </Slider>
              <div className="flex py-[10px]">
                <p className="mr-[10px]">Check out our 2,414 reviews</p>
                <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] mx-[2px]" />
                <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] mx-[2px]" />
                <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] mx-[2px]" />
                <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] mx-[2px]" />
                <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] mx-[2px]" />
                <BsStarHalf className="text-[#00b67a] w-[35px] h-[35px] px-[5px] py-[0px] mx-[2px] relative top-[-5px]" />
                <p className="mr-[10px] font-bold text-[20px]">Travel Trust</p>
              </div>
            </div>
            <div className="slider-container w-[90%] mx-auto block sm:hidden md:hidden">
              <Slider {...settings4_XSM}>
                {sliderContents.map((sc, index) => (
                  <div key={index}>
                    <div className="flex gap-1 justify-start py-[5px] mb-[20px]">
                      {sc.icons}
                      <span>
                        {sc.status ? (
                          <div>
                            <MdVerified className="inline w-[20px] h-[20px] mt-[5px]" />
                            <span className="relative top-[5px] left-[3px]">
                              Verified
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                    <p className="font-semibold text-[18px]">{sc.heading}</p>
                    <p className="text-[14px] pt-[5px]">{sc.paragraph}</p>
                    <span className="text-[#717172] text-[12px] font-bold">
                      {sc.footer1}
                      <span className="text-[#99999b] text-[12px] px-[2px] font-normal">
                        {sc.date}
                      </span>
                    </span>
                    <p className="text-[14px] pt-[5px] font-semibold">
                      {sc.footer2}
                    </p>
                  </div>
                ))}
              </Slider>
              <div className="py-[10px] mt-[30px] w-[80vw] mx-auto">
                <p className="text-center">Check out our 2,414 reviews</p>
                <div className="text-center">
                  <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] inline mx-[2px]" />
                  <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] inline mx-[2px]" />
                  <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] inline mx-[2px]" />
                  <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] inline mx-[2px]" />
                  <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] inline mx-[2px]" />
                </div>
                <div className="text-center">
                  <BsStarHalf className="text-[#00b67a] w-[35px] h-[35px] px-[5px] py-[0px] mx-[2px] inline" />
                  <p className="font-bold text-[20px] inline relative top-[5px]">
                    Travel Trust
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-container py-[50px] w-[90%] mx-auto hidden sm:block md:hidden">
              <Slider {...settings4_SM}>
                {sliderContents.map((sc, index) => (
                  <div key={index} className="mb-[20px]">
                    <div className="flex gap-1 justify-start py-[5px]">
                      {sc.icons}
                      <span>
                        {sc.status ? (
                          <div>
                            <MdVerified className="inline w-[20px] h-[20px] mt-[5px]" />
                            <span className="relative top-[5px] left-[3px]">
                              Verified
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                    <p className="font-semibold text-[18px]">{sc.heading}</p>
                    <p className="text-[14px] pt-[5px]">{sc.paragraph}</p>
                    <span className="text-[#717172] text-[12px] font-bold">
                      {sc.footer1}
                      <span className="text-[#99999b] text-[12px] font-normal">
                        {sc.date}
                      </span>
                    </span>
                    <p className="text-[14px] pt-[5px] font-semibold">
                      {sc.footer2}
                    </p>
                  </div>
                ))}
              </Slider>
              <div className="flex py-[10px] mt-[30px] w-[80vw] mx-auto">
                <p className="mr-[10px]">Check out our 2,414 reviews</p>
                <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] mx-[2px]" />
                <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] mx-[2px]" />
                <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] mx-[2px]" />
                <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] mx-[2px]" />
                <BsStarHalf className="bg-[#00b67a] text-white w-[25px] h-[25px] px-[5px] py-[5px] mx-[2px]" />
                <BsStarHalf className="text-[#00b67a] w-[35px] h-[35px] px-[5px] py-[0px] mx-[2px] relative top-[-5px]" />
                <p className="mr-[10px] font-bold text-[20px]">Travel Trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection2;
