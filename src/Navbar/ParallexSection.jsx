import { Icon } from "@iconify/react";
import HomeMarquee from "./HomeMarquee";
import { assets } from "../assets/assets";

export default function ParallaxSection() {
  const marqueeFeatures = [
    "Premium Business Address for GST & Bank Registrations",
    "Mail Handling & Forwarding Made Simple",
    "Seamless Business Registration Support",
    "Access Meeting Rooms & Workspaces on Demand",
    "Professional Presence Without the Overheads",
    "Expand into New Cities Without Physical Offices",
    "Trusted by Startups, Freelancers & Growing Enterprises",
    "Flexible Plans Tailored for Every Business Stage",
    "Setup in Just 3 Working Days",
    "Dedicated Support & Hassle-Free Compliance",
  ];

  const featureCount = [
    { title: "Location", count: "300", end: "+" },
    { title: "Happy Client", count: "20", end: "k" },
    { title: "support", count: "24/7", end: "" },
    { title: "states", count: "8", end: "+" },
  ];

  return (
    <section className="h-[100vh] md:min-h-[620px] md:max-h-[880px] bg-primary relative overflow-hidden pb-32">
      
      {/* MAIN CONTENT */}
      <div className="max-w-[1440px] h-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-10 px-4 xl:px-0">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 h-[45%] lg:h-full relative flex items-center justify-center">
          <div className="w-full h-[80%] relative rounded-xl overflow-hidden">
            <img
              src={assets.assistant1}
              alt="Assistant"
              className="w-full h-full object-cover rounded-xl"
            />

            {/* ARROW OVERLAY */}
            <span className="size-24 md:size-32 lg:size-44 pt-5 pl-5 bg-primary absolute bottom-0 right-0 rounded-tl-xl flex">
              <span className="size-full bg-white rounded-xl flex items-center justify-center">
                <Icon
                  icon="solar:arrow-right-up-linear"
                  className="text-primary text-3xl md:text-5xl lg:text-8xl"
                />
              </span>
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 h-[55%] lg:h-full flex flex-col justify-center text-white">

          {/* HEADING */}
          <h4 className="text-3xl md:text-4xl lg:text-[42px] font-semibold leading-[1.35] mb-6">
            Everything you need to register, scale, and manage your business—all
            in one Virtual Office
          </h4>

          {/* SUB HEADING */}
          <h5 className="text-xl md:text-2xl text-white/90 mb-6">
            Everything Your Business Demands, All in One Place
          </h5>

          {/* DESCRIPTION */}
          <p className="text-sm md:text-base lg:text-lg text-white/70 max-w-xl leading-relaxed mb-10">
            A virtual office gives you the power to be present anywhere in the
            world without actually moving there. For small and medium businesses,
            this opens doors to new markets and customer opportunities—without
            the financial burden of setting up multiple offices.
          </p>

          {/* COUNTERS */}
          <div className="w-full grid grid-cols-4 gap-6">
            {featureCount.map((item, index) => (
              <div
                key={index}
                className="h-28 flex flex-col items-center justify-center bg-white/10 border border-white/20 rounded-md"
              >
                <span className="text-3xl lg:text-4xl font-bold mb-1">
                  {item.count}
                  {item.end}
                </span>
                <p className="text-sm text-white/80">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="absolute bottom-0 w-full pb-6">
        <HomeMarquee marquee={marqueeFeatures} />
      </div>
    </section>
  );
}
