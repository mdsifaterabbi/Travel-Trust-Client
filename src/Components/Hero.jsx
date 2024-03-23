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
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const heroSliderContents = [
    {
      id: 1,
      bgImage: "./homePage/banner_image_1.png",
      alt: "banner_image_1",
      heading: "Visa & Passport Agency 1",
      subTitle:
        "Don’t let a little thing like paperwork stop you from enjoying your travels",
    },
    {
      id: 2,
      bgImage: "./homePage/banner_image_2.png",
      alt: "banner_image_2",
      heading: "Visa & Passport Agency 2",
      subTitle:
        "Don’t let a little thing like paperwork stop you from enjoying your travels",
    },
    {
      id: 3,
      bgImage: "./homePage/banner_image_3.png",
      alt: "banner_image_3",
      heading: "Visa & Passport Agency 3",
      subTitle:
        "Don’t let a little thing like paperwork stop you from enjoying your travels",
    },
    {
      id: 4,
      bgImage: "./homePage/temp2.jpg",
      alt: "temp2",
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
          className={`slider-container w-[100vw] md:w-[98vw] lg:w-[98vw] xl:w-[98vw] mx-auto mt-[-30px]`}
        >
          <Slider {...settings}>
            {heroSliderContents.map((s, index) => (
              <div
                key={index}
                className={`h-[300px] sm:h-[400px] lg:h-[470px]`}
              >
                <div
                  className={`relative top-0 left-0 w-[95vw] sm:w-[80vw] md:w-[80vw] md:py-[100px] lg:w-[80vw] xl:w-[80vw] xl:py-[200px] mx-auto py-[50px] sm:py-[100px]`}
                  style={{
                    backgroundImage: `url(${s.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* overlay creating */}
                  <div className={`${stylesForHero.myBgGradient}`}></div>
                  <h1 className="text-white relative text-center sm:text-center md:text-center lg:text-left xl:text-[40px]">
                    {s.heading}
                  </h1>
                  <p className="text-white relative text-center sm:text-center md:text-center lg:text-left xl:text-[22px]">
                    {s.subTitle}
                  </p>
                  <div className="absolute top-[55%] left-0 sm:w-[400px]">
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

                      <button className="btn btn-sm btn-info rounded-md ml-[10px]">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="block sm:hidden w-[90vw] mx-auto mt-[-150px]">
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

          <button className="btn btn-sm btn-info rounded-md block mx-auto mt-[10px]">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Hero;
