import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Fastest Virtual Office Setup",
      description: "Get started within just 3 working days after KYC approval.",
      logo: "solar:clock-square-bold",
    },
    {
      title: "Dedicated Customer Support",
      description: "Ensuring customer satisfaction with trained CRM executives.",
      logo: "solar:help-bold",
    },
    {
      title: "Lowest Price Assurance",
      description: "Guaranteed lowest prices with zero hidden charges.",
      logo: "solar:tag-price-bold",
    },
    {
      title: "Full Refund Guarantee",
      description: "Hassle-free refund policy if registration is declined.",
      longDescription:
        "We stand by our promise of reliability. If your GST or company registration is declined, you’ll receive a full refund without hidden conditions or unnecessary delays—giving you complete peace of mind.",
      logo: "solar:shield-check-bold",
    },
    {
      title: "Seamless Digital Process",
      description: "User-friendly online agreements and quick digital KYC.",
      longDescription:
        "Our end-to-end digital process makes it easy to complete KYC and agreements online. From verification to documentation, everything is simplified to save you time, so you can focus on growing your business.",
      logo: "solar:document-text-bold",
    },
  ];

  return (
    <section className="w-full max-h-[1150px] h-auto bg-white max-lg:px-4 py-8 lg:py-16 relative">
      
      {/* BACKGROUND GRID */}
      <div className="bottom-fade-grid absolute inset-0 z-0" />

      <div className="max-w-[1440px] h-full mx-auto flex flex-col sticky z-10">

        {/* HEADER */}
        <div className="w-full flex items-center justify-between">
          <h4 className="text-xl md:text-4xl font-medium lg:font-semibold lg:leading-12 text-primary">
            Beyond Offices <br />
            Towards Opportunities
          </h4>

          <Link to="/contact-us">
            <button className="btn btn-md md:btn-lg bg-secondary text-white flex items-center gap-x-2">
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
          {benefits.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-primary rounded-xl px-4 py-6 lg:px-8 lg:py-6 flex flex-col justify-between max-md:gap-y-4"
            >
              <Icon
                icon={item.logo}
                className="text-white text-5xl lg:text-6xl"
              />

              <div>
                <h4 className="font-semibold lg:text-xl lg:font-bold text-white lg:mt-8">
                  {item.title}
                </h4>
                <p className="lg:text-lg text-white/60 lg:mt-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM GRID (2 ITEMS) */}
        <div className="w-full md:h-1/2 grid md:grid-cols-2 gap-3 mt-3">
          {benefits.slice(3, 5).map((item, index) => (
            <div
              key={index}
              className="bg-primary rounded-xl px-6 py-4 lg:px-8 lg:py-6 flex flex-col justify-between max-md:gap-y-4"
            >
              <Icon
                icon={item.logo}
                className="text-white text-5xl lg:text-6xl"
              />

              <div>
                <h4 className="font-semibold lg:text-xl lg:font-bold text-white lg:mt-8">
                  {item.title}
                </h4>

                {/* DESKTOP LONG TEXT */}
                <p className="lg:text-lg text-white/60 lg:mt-3 hidden lg:block">
                  {item.longDescription}
                </p>

                {/* MOBILE SHORT TEXT */}
                <p className="lg:text-lg text-white/60 lg:mt-3 block lg:hidden">
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
