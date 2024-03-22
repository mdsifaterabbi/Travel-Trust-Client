import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Arrows.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${styles.myRightArrowStyle}`} onClick={onClick}>
      <BsArrowRight className="relative left-[50%] transform: translate-x-[-50%] w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px] xl:w-[50px] xl:h-[50px] top-[50%] transform: translate-y-[-50%]" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${styles.myLeftArrowStyle}`} onClick={onClick}>
      <BsArrowLeft className="relative left-[50%] transform: translate-x-[-50%] w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px] xl:w-[50px] xl:h-[50px] top-[50%] transform: translate-y-[-50%]" />
    </div>
  );
}

const Hero = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div>
        <div
          className={`slider-container w-[100vw] md:w-[98vw] lg:w-[98vw] xl:w-[98vw] mx-auto`}
        >
          <Slider {...settings}>
            <div className="bg-sky-500 py-[100px]">
              <h1 className="text-black text-center text-[40px]">Image 1</h1>
            </div>
            <div className="bg-purple-500 py-[100px]">
              <h1 className="text-black text-center text-[40px]">Image 2</h1>
            </div>
            <div className="bg-orange-500 py-[100px]">
              <h1 className="text-black text-center text-[40px]">Image 3</h1>
            </div>
            <div className="bg-pink-500 py-[100px]">
              <h1 className="text-black text-center text-[40px]">Image 4</h1>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
