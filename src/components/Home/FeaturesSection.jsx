import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Professional Business Address",
      description:
        "Establish a credible presence with a prime virtual office address.",
      logo: "solar:map-arrow-square-bold",
    },
    {
      title: "Bank/GST Verification",
      description: "Ensure smooth compliance with verified bank and GST details.",
      logo: "solar:verified-check-bold",
    },
    {
      title: "Cost Effective",
      description: "Budget-friendly solutions for growing businesses.",
      logo: "solar:sale-square-bold",
    },
    {
      title: "Access to Meeting Rooms",
      description: "Flexible meeting spaces for teams and clients.",
      longDescription:
        "Our virtual office plans include access to fully equipped meeting rooms designed for client presentations, team discussions, and collaborations. With modern amenities and professional environments.",
      logo: "solar:camera-square-bold",
    },
    {
      title: "Dedicated Customer Support",
      description: "Quick resolutions with round-the-clock support.",
      longDescription:
        "Get access to a dedicated support team committed to resolving your queries quickly and efficiently. Whether it’s assistance with documentation, compliance, or day-to-day queries.",
      logo: "solar:help-bold",
    },
  ];

  return (
    <section className="w-full max-h-[1150px] h-auto bg-primary max-lg:px-4 py-8 lg:py-16">
      <div className="max-w-[1440px] h-full mx-auto flex flex-col">

        {/* HEADER */}
        <div className="w-full flex items-center justify-between">
          <h4 className="text-2xl md:text-4xl lg:font-semibold lg:leading-12 text-white">
            Built for Startups <br />
            Designed for Growth
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

        {/* TOP GRID (3 ITEMS) */}
        <div className="w-full md:h-1/2 grid md:grid-cols-3 gap-3 mt-8">
          {features.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-4 py-6 lg:px-8 lg:py-6 flex flex-col justify-between max-md:gap-y-4"
            >
              <Icon
                icon={item.logo}
                className="text-primary text-5xl lg:text-6xl"
              />

              <div>
                <h4 className="font-semibold lg:text-xl lg:font-bold text-primary lg:mt-8">
                  {item.title}
                </h4>
                <p className="lg:text-lg lg:text-primary/60 lg:mt-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM GRID (2 ITEMS) */}
        <div className="w-full md:h-1/2 grid md:grid-cols-2 gap-3 mt-3">
          {features.slice(3, 5).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-6 py-4 lg:px-8 lg:py-6 flex flex-col justify-between max-md:gap-y-4"
            >
              <Icon
                icon={item.logo}
                className="text-primary text-5xl lg:text-6xl"
              />

              <div>
                <h4 className="font-semibold lg:text-xl lg:font-bold text-primary lg:mt-8">
                  {item.title}
                </h4>

                {/* DESKTOP LONG TEXT */}
                <p className="lg:text-lg lg:text-primary/60 lg:mt-3 hidden lg:block">
                  {item.longDescription}
                </p>

                {/* MOBILE SHORT TEXT */}
                <p className="lg:text-lg lg:text-primary/60 lg:mt-3 block lg:hidden">
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
