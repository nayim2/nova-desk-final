import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Navbar from "../Home/Navbar";
import { assets } from "../../assets/assets";

export default function ServiceBanner() {
  const [count, setCount] = useState(0);
  const totalSlides = 3;

  const content = {
    heading: {
      0: "Launch Your Company. <br /> Build with Confidence.",
      1: "Join the Right <br /> Community for Growth.",
      2: "Accelerate Your Journey <br /> with Expert Guidance.",
    },
    paragraph: {
      0: "Seamless Company Registration service for early- <br class='max-md:hidden' /> stage founders with No Hidden Charges.",
      1: "Explore our communities for founders, which offer <br class='max-md:hidden' /> networking, resources, deals, and more.",
      2: "An all-inclusive program designed by Experts to <br class='max-md:hidden' /> guide founders in their Y Combinator journey.",
    },
    button: {
      0: {
        "btn-1": "Register your Business",
        "btn-2": "Learn More",
      },
      1: "Explore our Communities",
      2: "Learn More",
    },
    img: {
      0: assets.office1,
      1: assets.office2,
      2: assets.office3,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCount((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCount((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="w-full h-[70vh] lg:min-h-[760px] xl:h-[70vh] relative pt-4 px-4">
      <Navbar />

      <div className="top_gem" />

      <div className="w-full h-[calc(100%-80px)] sticky z-30">
        <div className="max-w-[1440px] max-md:min-h-[480px] h-full mx-auto flex flex-col lg:flex-row items-center justify-center md:px-4 xl:px-0">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 h-full flex flex-col items-center lg:items-start justify-center gap-y-4">
            <h1
              className="text-3xl max-md:text-center max-md:font-semibold md:text-6xl"
              dangerouslySetInnerHTML={{ __html: content.heading[count] }}
            />

            <p
              className="text-sm max-md:text-center md:text-lg"
              dangerouslySetInnerHTML={{ __html: content.paragraph[count] }}
            />

            {/* BUTTONS */}
            <div className="flex gap-x-4">
              {typeof content.button[count] === "object" ? (
                <>
                  <Link to="/plans">
                    <button className="btn btn-primary">
                      {content.button[count]["btn-1"]}
                    </button>
                  </Link>

                  <Link to="/plans">
                    <button className="btn btn-outline btn-primary">
                      {content.button[count]["btn-2"]}
                    </button>
                  </Link>
                </>
              ) : (
                <Link to="/plans">
                  <button className="btn btn-primary">
                    {content.button[count]}
                  </button>
                </Link>
              )}
            </div>

            {/* CONTROLS */}
            <div className="carousel_p space-x-4 mt-4 flex items-center">
              <Icon
                icon="solar:alt-arrow-left-line-duotone"
                className="text-2xl cursor-pointer"
                onClick={prev}
              />

              <ul className="flex items-center gap-x-2">
                {[0, 1, 2].map((i) => (
                  <li
                    key={i}
                    className={`p-1 rounded-full bg-black transition-all ${
                      count === i ? "px-4" : ""
                    }`}
                  />
                ))}
              </ul>

              <Icon
                icon="solar:alt-arrow-right-line-duotone"
                className="text-2xl cursor-pointer"
                onClick={next}
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-1/2 h-full hidden lg:flex items-center justify-end relative pt-[40px]">
            <img
              src={content.img[count]}
              alt="novadesk"
              className="drop-shadow-2xl rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
