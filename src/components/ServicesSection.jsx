import { services } from "../constants";

const ServicesSection = () => {
  return (
    <section id="services" className="relative mt-20 border-b pb-5 border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className=" text-cyan-500 rounded-full h-6 text-2xl  font-medium  py-1 uppercase">
          Services
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          We can{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-transparent bg-clip-text">
            help you with
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 ">
        {services.map((services, index) => (
          <div key={index} className="w-full border-neutral-700 rounded-xl sm:w-1/2 text-xl  md:w-1/3">
            <div className="flex">
              <div className="flex mx-2 h-10 w-10 p-2   text-cyan-700 justify-center items-center rounded-full">
                {services.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-2xl">{services.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {services.description}
                </p>
              </div>
              
            </div>
            {/* <a href="#" className="shadow-lg   py-3 px-4 mx-3 rounded-md border">
             Our Pricing
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
