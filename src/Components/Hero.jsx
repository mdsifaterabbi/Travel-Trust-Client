import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Arrows.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { useForm } from "react-hook-form";

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
  const heroSliderContents = [
    {
      id: 1,
      heading: "Visa & Passport Agency 1",
      subTitle:
        "Don’t let a little thing like paperwork stop you from enjoying your travels",
    },
    {
      id: 2,
      heading: "Visa & Passport Agency 2",
      subTitle:
        "Don’t let a little thing like paperwork stop you from enjoying your travels",
    },
    {
      id: 3,
      heading: "Visa & Passport Agency 3",
      subTitle:
        "Don’t let a little thing like paperwork stop you from enjoying your travels",
    },
    {
      id: 4,
      heading: "Visa & Passport Agency 4",
      subTitle:
        "Don’t let a little thing like paperwork stop you from enjoying your travels",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <>
      <div>
        <div
          className={`slider-container w-[100vw] md:w-[98vw] lg:w-[98vw] xl:w-[98vw] mx-auto`}
        >
          <Slider {...settings}>
            {heroSliderContents.map((s, index) => (
              <div key={index} className="border pt-[130px] pb-[90px]">
                <div className="w-[50vw] mx-auto">
                  <h1 className="text-black text-left xl:text-[40px]">
                    {s.heading}
                  </h1>
                  <p className="text-left xl:text-[22px]">{s.subTitle}</p>
                  <div className="bg-purple-600 w-[50%] py-[15px] rounded-md">
                    <form onSubmit={handleSubmit((data) => console.log(data))}>
                      {/* <label htmlFor="serviceOrDestination">
                        Choose service or destination:
                      </label> */}
                      <select
                        {...register("serviceOrDestination", {
                          required: true,
                        })}
                        id="serviceOrDestination"
                        className="mx-[30px]"
                      >
                        <option value="">
                          -- Choose service or destination --
                        </option>{" "}
                        {/* Default option */}
                        <option value="service1">Service 1</option>
                        <option value="service2">Service 2</option>
                        <option value="destination1">Destination 1</option>
                        <option value="destination2">Destination 2</option>
                      </select>
                      {errors.serviceOrDestination && (
                        <p>Please select a service or destination.</p>
                      )}

                      <input type="submit" />
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
