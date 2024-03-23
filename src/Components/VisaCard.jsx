import styles from "./VisaCard.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VisaCard = () => {
  const visaCardContents = [
    {
      id: 1,
      bgImage: "./homePage/passport_card_bg.png",
      flagUrl: "./homePage/passport.png",
      alt: "passport",
      heading: "Passport services",
      bodyText:
        "TVP provides U.S. Passport services provided in as little as few days.",
      buttonText: "Get Service",
    },
    {
      id: 2,
      bgImage: "./homePage/china_card_bg.png",
      flagUrl: "./homePage/china.png",
      alt: "china",
      heading: "China Visas",
      bodyText: "Traveling to China? Get your Chinese visa from TVP here",
      buttonText: "Get Visa",
    },
    {
      id: 3,
      bgImage: "./homePage/brazil_card_bg.png",
      flagUrl: "./homePage/brazil.png",
      alt: "brazil",
      heading: "Brazil Visas",
      bodyText: "Count on TVP for all your Brazilian visa needs",
      buttonText: "Get Visa",
    },
    {
      id: 4,
      bgImage: "./homePage/india_card_bg.png",
      flagUrl: "./homePage/india.png",
      alt: "india",
      heading: "India Visas",
      bodyText: "TVP can make getting your Indian visa fast and easy",
      buttonText: "Get Visa",
    },
  ];

  const settings4VisaCard = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-[70vw] mx-auto">
        <div className="slider-container">
          <Slider {...settings4VisaCard}>
            {visaCardContents.map((vc, index) => (
              <div key={index}>
                <div className={`w-[90%] mx-auto`}>
                  <div
                    className={`relative top-0 left-0 card w-[100%] h-[300px] bg-base-100 shadow-xl`}
                    style={{
                      backgroundImage: `url(${vc.bgImage})`,
                      backgroundSize: "cover",
                    }}
                  >
                    {/* overlay creating */}
                    <div className={`${styles.myBgGradient}`}></div>
                    <figure className="px-10 pt-10 relative">
                      <img
                        src={vc.flagUrl}
                        alt={vc.alt}
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center px-0">
                      <h2 className="relative card-title text-white">{vc.heading}</h2>
                      <p className="relative px-[5px] text-[12px] text-[#d4d2d2]">
                        {vc.bodyText}
                      </p>
                      <div className="relative">
                        <button className=" bg-[#044888] w-[200px] text-white border-none mt-[10px] py-[10px] font-semibold hover:bg-[#376b9b]">
                          {vc.buttonText}
                        </button>
                      </div>
                    </div>
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

export default VisaCard;
