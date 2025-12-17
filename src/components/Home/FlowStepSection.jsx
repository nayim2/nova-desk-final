import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { assets } from "../../assets/assets";
import { Icon } from "@iconify/react";

const flowSteps = [
  {
    image: assets.location,
    title: "Choose Location",
    description: "Pick your business city easily",
  },
  {
    image: assets.plan,
    title: "Select Plan",
    description: "Flexible plans to fit needs",
  },
  {
    image: assets.payment,
    title: "Make Payment",
    description: "Secure and convenient payment methods",
  },
  {
    image: assets.document,
    title: "Submit KYC",
    description: "Quick document verification process",
  },
  {
    image: assets.ready,
    title: "Office Ready",
    description: "Get started within three days",
  },
];

export default function FlowStepsSection() {
  const itemsRef = useRef([]);

  const startAnimation = (index) => {
    const el = itemsRef.current[index];
    if (!el) return;

    const badge = el.querySelector(".step-badge");
    const overlay = el.querySelector(".step-overlay");

    badge.style.display = "none";

    gsap.to(el, {
      width: "60%",
      duration: 0.25,
      overwrite: "auto",
      onComplete: () => {
        overlay.style.display = "flex";
      },
    });
  };

  const stopAnimation = (index) => {
    const el = itemsRef.current[index];
    if (!el) return;

    const badge = el.querySelector(".step-badge");
    const overlay = el.querySelector(".step-overlay");

    gsap.to(el, {
      width: "20%",
      duration: 0.25,
      overwrite: "auto",
      onComplete: () => {
        overlay.style.display = "none";
        badge.style.display = "flex";
      },
    });
  };

  return (
    <section className="w-full bg-primary md:min-h-[580px] md:h-[60vh]">
      <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-10">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h4 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
            From Signup to Setup <br /> Made Easy
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

        {/* DESKTOP FLOW */}
        <div className="hidden md:flex w-full h-96 mt-8 overflow-hidden rounded-2xl">
          {flowSteps.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              onMouseEnter={() => startAnimation(index)}
              onMouseLeave={() => stopAnimation(index)}
              className="relative w-1/5 h-full transition-all duration-300 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* STEP NUMBER */}
              <span className="step-badge absolute bottom-4 left-4 btn btn-square btn-primary">
                {index + 1}
              </span>

              {/* OVERLAY */}
              <div
                className="step-overlay hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%]
                bg-gradient-to-t from-primary/80 to-transparent
                flex-col items-start justify-center pl-5 text-white"
              >
                <h4 className="text-xl lg:text-3xl font-semibold">
                  {item.title}
                </h4>
                <p className="text-base lg:text-lg mt-1">
                  {item.description}
                </p>
                <button className="btn btn-primary mt-4">
                  Lets Talk
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE STACK */}
        <div className="md:hidden flex flex-col gap-y-4 mt-8">
          {flowSteps.map((item, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-primary/60 flex flex-col justify-end p-4 text-white">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
