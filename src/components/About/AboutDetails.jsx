import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "../../assets/assets";

gsap.registerPlugin(ScrollTrigger);

export default function AboutDetails() {
  const imageRef = useRef(null);

  const contentArray = [
    {
      title: "Virtual Office Address",
      description:
        "Establish a prestigious business address in prime Indian locations to elevate your brand image. This address can be used for official correspondence, marketing materials, and registering your business.",
    },
    {
      title: "Mail Handling",
      description:
        "Get peace of mind with secure mail forwarding and handling services. We'll receive your business mail at our virtual office address and promptly forward it to your designated location.",
    },
    {
      title: "Meeting Room Access",
      description:
        "Conduct professional meetings and client interactions in our fully equipped meeting rooms available across various locations in India. Enjoy the convenience of booking meeting spaces online for seamless scheduling.",
    },
    {
      title: "Business Support Services",
      description:
        "Enhance your virtual office experience with additional services like call answering, receptionist services, and administrative support.",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallax-section",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });

    tl.to(imageRef.current, {
      yPercent: -50,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="parallax-section w-full max-h-[1240px] md:max-h-[680px] md:h-[640px] bg-primary py-14">
      <div className="max-w-[1440px] h-full mx-auto flex max-md:flex-col items-center justify-center gap-y-6 md:gap-x-6 max-md:px-4">

        {/* IMAGE SIDE */}
        <div className="w-full md:w-1/2 h-[350px] md:h-full relative flex items-center justify-center">
          <div className="size-full relative rounded-xl overflow-hidden">
            <img
              ref={imageRef}
              src={assets.assistant1}
              alt="Assistant"
              className="rounded-xl image_assistant w-full h-full object-cover"
            />

            {/* ARROW BADGE */}
            <span className="size-24 md:size-32 lg:size-44 pt-5 pl-5 bg-primary absolute bottom-0 right-0 rounded-tl-xl flex">
              <span className="size-full bg-white rounded-xl flex items-center justify-center">
                <Icon
                  icon="solar:arrow-right-up-linear"
                  className="text-3xl md:text-5xl lg:text-8xl text-primary"
                />
              </span>
            </span>
          </div>
        </div>

        {/* MARQUEE CONTENT */}
        <div className="w-full md:w-1/2 h-full max-md:min-h-[600px] max-h-[760px] rounded-2xl bg-[#ff8a80] p-8 overflow-hidden relative">
          <div className="h-full flex flex-col items-center justify-evenly gap-y-4 animate-marquee-vertical">

            {[...Array(4)].map((_, repeatIndex) => (
              <div key={repeatIndex} className="w-full space-y-4">
                {contentArray.map((item, index) => (
                  <div
                    key={`${repeatIndex}-${index}`}
                    className="w-full bg-white rounded-lg p-4 space-y-4"
                  >
                    <h1 className="text-lg font-semibold">
                      {item.title}
                    </h1>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
