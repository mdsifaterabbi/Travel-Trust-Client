import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Arrows.module.css";
import stylesForHero from "./Hero.module.css";
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

    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",

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

  const dropdownContents = [
    {
      id: 1,
      country: "Bangladesh",
    },
    {
      id: 2,
      country: "India",
    },
    {
      id: 3,
      country: "Pakistan",
    },
    {
      id: 4,
      country: "Srilanka",
    },
    {
      id: 5,
      country: "Nepal",
    },
    {
      id: 6,
      country: "Bhutan",
    },
    {
      id: 7,
      country: "Maldives",
    },
  ];

  const passportServices = [
    {
      id: 1,
      service: "Passport Services",
    },
    {
      id: 2,
      service: "New Passport",
    },
    {
      id: 3,
      service: "Passport Renewal",
    },
    {
      id: 4,
      service: "Name Change",
    },
    {
      id: 5,
      service: "Replace Lost or Stolen Passport",
    },
    {
      id: 6,
      service: "Replace Damaged Passport",
    },
    {
      id: 7,
      service: "Second Passport",
    },
    {
      id: 8,
      service: "Passport for Child",
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
              <div
                key={index}
                className="border h-[300px] sm:h-[400px] lg:h-[470px]"
              >
                <div className="w-[95vw] sm:w-[80vw] md:w-[80vw] md:py-[100px] lg:w-[80vw] mx-auto bg-orange-500 mt-[50px] py-[50px] sm:py-[50px] md:mt-[50px] lg:mt-[50px]">
                  <h1 className="text-black text-center sm:text-center md:text-center lg:text-left xl:text-[40px]">
                    {s.heading}
                  </h1>
                  <p className="text-center sm:text-center md:text-center lg:text-left xl:text-[22px]">
                    {s.subTitle}
                  </p>
                  <form
                    onSubmit={handleSubmit((data) => console.log(data))}
                    className="hidden sm:block md:block sm:text-center sm:mt-[50px] md:text-center lg:text-left md:mt-[50px]"
                  >
                    <select
                      {...register("serviceOrDestination", {
                        required: true,
                      })}
                      id="serviceOrDestination"
                      className="md:mr-[15px] lg:mx-[30px] py-[10px] px-[10px]"
                    >
                      <option value="">Choose service or destination</option>{" "}
                      <option className="font-bold text-black" disabled>
                        Passport Services
                      </option>
                      {passportServices.map((ps) => (
                        <option
                          key={ps.id}
                          value={ps.service}
                          className={`${stylesForHero.MyOptions}`}
                        >
                          {ps.service}
                        </option>
                      ))}
                      <option className="font-bold text-black" disabled>
                        Popular Travel Visas
                      </option>
                      {dropdownContents.map((dc) => (
                        <option
                          key={dc.id}
                          value={dc.country}
                          className={`${stylesForHero.MyOptions}`}
                        >
                          {dc.country}
                        </option>
                      ))}
                    </select>
                    {errors.serviceOrDestination && (
                      <p>Please select a service or destination.</p>
                    )}

                    <button className="btn btn-sm btn-info rounded-md">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="block sm:hidden bg-sky-500 w-[90vw] mx-auto py-[20px]">
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="text-center"
        >
          <select
            {...register("serviceOrDestination", {
              required: true,
            })}
            id="serviceOrDestination"
            className="py-[10px] px-[5px] w-[230px]"
          >
            <option value="">Choose service or destination</option>{" "}
            <option className="font-bold text-black" disabled>
              Passport Services
            </option>
            {passportServices.map((ps) => (
              <option
                key={ps.id}
                value={ps.service}
                className={`${stylesForHero.MyOptions}`}
              >
                {ps.service}
              </option>
            ))}
            <option className="font-bold text-black" disabled>
              Popular Travel Visas
            </option>
            {dropdownContents.map((dc) => (
              <option
                key={dc.id}
                value={dc.country}
                className={`${stylesForHero.MyOptions}`}
              >
                {dc.country}
              </option>
            ))}
          </select>
          {errors.serviceOrDestination && (
            <p>Please select a service or destination.</p>
          )}

          <button className="btn btn-sm btn-info rounded-md block mx-auto mt-[10px]">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Hero;
