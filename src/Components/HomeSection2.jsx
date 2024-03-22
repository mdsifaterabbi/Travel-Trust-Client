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
      <div className="flex flex-row flex-wrap">
        <div className="basis-1/4 border">
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
        <div className="basis-3/4 border">
          <div className="w-[100%]">
            <div className="slider-container xl:w-[600px] mx-auto">
              <Slider {...settings}>
                {sliderContents.map((sc) => (
                  <div className="border">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection2;
