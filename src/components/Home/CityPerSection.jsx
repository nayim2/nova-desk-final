import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { assets } from "../../assets/assets";

export default function CityPresenceSection() {
  const cities = [
    {
      name: "Tamil Nadu",
      image: assets.location1,
    },
    {
      name: "Delhi",
      image: assets.location2
    },
    {
      name: "Bengaluru",
      image: assets.location3
    },
    {
      name: "Kolkata",
      image: assets.location4
    },
    {
      name: "Mumbai",
      image: assets.location5
    },
    {
      name: "Pune",
      image: assets.location6
    },
  ];

  return (
    <section className="w-full max-md:h-[1308px] md:min-h-[850px] md:h-[80vh] flex flex-col items-center justify-between relative">
      
      {/* BACKGROUND GRID */}
      <div className="h-full top-fade-grid absolute inset-0" />

      {/* CONTENT */}
      <div className="max-w-[1440px] mx-auto w-full h-full flex flex-col justify-center items-center gap-y-8 py-8 lg:py-16 px-4 absolute z-20 top-0 left-1/2 -translate-x-1/2">

        {/* HEADER */}
        <div className="w-full flex items-center justify-between">
          <h4 className="text-2xl md:text-4xl font-medium lg:font-semibold lg:leading-12 text-black">
            Build Presence <br />
            Expand Influence
          </h4>

          <Link to="/contact-us">
            <button className="btn btn-md md:btn-lg btn-secondary flex items-center gap-x-2">
              Let&apos;s Talk
              <Icon
                icon="solar:arrow-right-up-linear"
                className="text-xl"
              />
            </button>
          </Link>
        </div>

        {/* GRID */}
        <div className="w-full h-[90%] md:h-[80%] flex flex-col gap-y-4">

          {/* ROW 1 */}
          <div className="w-full h-1/2 flex flex-col lg:flex-row items-center justify-start gap-y-3 lg:gap-x-2">
            {cities.slice(0, 3).map((item, index) => (
              <CityCard key={index} item={item} />
            ))}
          </div>

          {/* ROW 2 */}
          <div className="w-full h-1/2 flex flex-col lg:flex-row items-center justify-start gap-y-3 lg:gap-x-2">
            {cities.slice(3, 6).map((item, index) => (
              <CityCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================= */
/* CITY CARD COMPONENT */
/* ============================= */
function CityCard({ item }) {
  return (
    <div className="h-full w-full lg:w-1/3 lg:hover:w-3/5 transition-all duration-200 ease-in-out rounded-xl overflow-hidden relative group-city">
      
      {/* IMAGE */}
      <img
        src={item.image}
        alt="novadesk all in one virtual office"
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* BOTTOM LABEL */}
      <div className="group-city-hover:hidden absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] py-2 rounded-md bg-primary flex items-center justify-center">
        <h6 className="text-xl text-white text-center font-semibold">
          {item.name}
        </h6>
      </div>

      {/* HOVER OVERLAY */}
      <div className="hidden group-city-hover:flex absolute inset-0 bg-primary/20 backdrop-blur-lg text-white items-center justify-center transition-all duration-100">
        <h4 className="text-3xl">{item.name}</h4>
      </div>
    </div>
  );
}
