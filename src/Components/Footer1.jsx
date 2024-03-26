import stylesForHero from "./Hero.module.css";
import { useForm } from "react-hook-form";

const Footer1 = () => {
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
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row flex-wrap ">
        <div className="basis-1/1 sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/2 bg-[#003f9f]">
          <div className="mt-[20px] mb-[-20px] sm:my-[30px] text-left w-[98%] sm:w-[87%] md:w-[95%] lg:w-[90%] xl:w-[70%] mx-auto">
            <p className="text-white font-bold text-center text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
              Travel Trust Pro
            </p>
            <p className="text-white font-bold text-center text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]">
              Passports. Visas. Legalizations. Done.{" "}
            </p>

            {/* This is only for extra small device */}
            <div className="block sm:hidden w-[95%] sm:w-[98%] md:w-[90%] lg:w-[90%] xl:w-[80%] bg-[#ffffff] py-[10px] rounded-md border mx-auto mt-[20px]">
              <div className="text-center">
                <form
                  onSubmit={handleSubmit((data) => console.log(data))}
                  className=""
                >
                  <select
                    {...register("serviceOrDestination", {
                      required: true,
                    })}
                    id="serviceOrDestination"
                    className="py-[10px] bg-[#ffffff] w-[140px] sm:w-[150px] md:w-[150px] lg:w-[200px] xl:w-[200px] border text-center text-[10px] sm:text-[12px] md:text-[14px]"
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

                  <button className="btn btn-sm bg-[#fdc23b] text-white rounded-md ml-[10px]">
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/1 hidden sm:block sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/2 bg-[#003f9f] relative top-0 left-0">
          <div className="w-[98%] sm:w-[98%] md:w-[90%] lg:w-[90%] xl:w-[80%] bg-[#ffffff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-[10px] rounded-md border">
            <div className="text-center">
              <form
                onSubmit={handleSubmit((data) => console.log(data))}
                className=""
              >
                <select
                  {...register("serviceOrDestination", {
                    required: true,
                  })}
                  id="serviceOrDestination"
                  className="py-[10px] bg-[#ffffff] sm:w-[150px] md:w-[150px] lg:w-[200px] xl:w-[200px] border text-center sm:text-[12px] md:text-[14px]"
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

                <button className="btn btn-sm bg-[#fdc23b] text-white rounded-md ml-[10px]">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
