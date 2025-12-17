import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function BusinessPowerSection() {
  const features = [
    {
      title: "Cost-Effectiveness",
      description:
        "Eliminate overhead with budget-friendly virtual office plans.",
      icon: "solar:sale-square-bold",
    },
    {
      title: "Scalability",
      description:
        "Easily adapt your virtual office plan as your business expands.",
      icon: "solar:graph-new-up-bold",
    },
    {
      title: "Flexibility",
      description: "Work from anywhere with a professional address.",
      icon: "solar:compass-bold",
    },
    {
      title: "Enhanced Credibility",
      description: "Project a polished, professional image.",
      longDescription:
        "Project a polished and trustworthy image to clients and partners with a prestigious business address in prime Indian locations. Establish your reputation with credibility from day one.",
      icon: "solar:shield-star-bold",
    },
    {
      title: "Seamless Support",
      description: "Reliable support to keep you focused.",
      longDescription:
        "Benefit from reliable administrative and customer support that ensures smooth business operations. From handling mail and calls to managing inquiries, our dedicated team lets you focus on growth.",
      icon: "solar:headphones-square-bold",
    },
  ];

  return (
    <section className="w-full max-h-[1150px] h-auto bg-white max-lg:px-4 py-8 lg:py-16">
      <div className="max-w-[1440px] h-full mx-auto flex flex-col">

        {/* HEADER */}
        <div className="w-full flex items-center justify-between">
          <h4 className="text-2xl md:text-4xl lg:font-semibold lg:leading-12 text-primary">
            Power Your With <br />
            Business Novadesk
          </h4>

          <Link to="/contact-us">
            <button className="btn btn-sm md:btn-lg bg-white shadow-none flex items-center gap-x-2">
              Lets Talk
              <Icon
                icon="solar:arrow-right-up-linear"
                className="text-xl"
              />
            </button>
          </Link>
        </div>

        {/* TOP 3 CARDS */}
        <div className="w-full md:h-1/2 grid md:grid-cols-3 gap-3 mt-8">
          {features.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-primary rounded-xl px-4 py-6 lg:px-8 lg:py-6 flex flex-col justify-between gap-y-4"
            >
              <Icon
                icon={item.icon}
                className="text-white text-5xl lg:text-6xl"
              />

              <div>
                <h4 className="font-semibold lg:text-xl lg:font-bold text-white lg:mt-8">
                  {item.title}
                </h4>
                <p className="lg:text-lg lg:text-white/60 lg:mt-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM 2 CARDS */}
        <div className="w-full md:h-1/2 grid md:grid-cols-2 gap-3 mt-3">
          {features.slice(3, 5).map((item, index) => (
            <div
              key={index}
              className="bg-primary rounded-xl px-6 py-4 lg:px-8 lg:py-6 flex flex-col justify-between gap-y-4"
            >
              <Icon
                icon={item.icon}
                className="text-white text-5xl lg:text-6xl"
              />

              <div>
                <h4 className="font-semibold lg:text-xl lg:font-bold text-white lg:mt-8">
                  {item.title}
                </h4>

                {/* Desktop */}
                <p className="lg:text-lg lg:text-white/60 lg:mt-3 hidden lg:block">
                  {item.longDescription}
                </p>

                {/* Mobile */}
                <p className="lg:text-lg lg:text-white/60 lg:mt-3 block lg:hidden">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
