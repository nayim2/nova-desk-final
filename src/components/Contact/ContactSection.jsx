import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Home/Navbar";
import ContactsForm from "./ContactForm";
import { assets } from "../../assets/assets";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  const imgLeftRef = useRef(null);
  const imgRightRef = useRef(null);

  useEffect(() => {
    if (imgLeftRef.current) {
      gsap.to(imgLeftRef.current, {
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: imgLeftRef.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    }

    if (imgRightRef.current) {
      gsap.to(imgRightRef.current, {
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: imgRightRef.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="w-full relative py-6 px-4 lg:py-10">
      <Navbar />

      <div className="top_gem" />

      <div className="max-w-[1440px] mx-auto pt-10 relative z-20">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <span className="hero-mini flex items-center gap-2">
            <span className="icon-[solar--add-circle-broken]" />
            Let's Talk
          </span>

          <h1 className="text-4xl md:text-6xl font-bold">Contact us</h1>
          <p className="text-base md:text-lg text-gray-600">
            Questions, ideas, or just saying hi
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="w-full flex flex-col lg:flex-row gap-4 min-h-[760px]">

          {/* LEFT COLUMN */}
          <div className="w-full lg:w-[30%] flex flex-col gap-4">
            {/* Hire Us Card */}
            <div className="glass-card p-8 flex flex-col h-[280px]">
              <span className="hero-mini flex items-center gap-2">
                <span className="icon-[solar--magic-stick-broken]" />
                Hire Us
              </span>

              <p className="text-lg font-medium mt-3">
                Have something on your mind? We're all ears.
              </p>

              <div className="mt-auto text-lg font-medium space-y-1">
                <a
                  href="mailto:support@novadesk.in"
                  className="hover:underline"
                >
                  support@novadesk.in
                </a>
                <a
                  href="https://novadesk.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  novadesk.in
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="hidden md:block glass-card overflow-hidden h-[280px]">
              <img
                ref={imgLeftRef}
                src={assets.assistant1}
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CENTER FORM */}
          <div className="w-full lg:w-[40%] flex items-center justify-center">
            <ContactsForm />
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-[30%] flex flex-col gap-4">
            {/* Image */}
            <div className="hidden md:block glass-card overflow-hidden h-[280px]">
              <img
                ref={imgRightRef}
                src={assets.assistant2}
                alt="Celebration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Growth Card */}
            <div className="glass-card p-8 flex flex-col h-[280px]">
              <span className="hero-mini flex items-center gap-2">
                <span className="icon-[solar--diagram-up-outline]" />
                Growth
              </span>

              <p className="text-lg font-medium mt-3">
                Marketing that drives impact and success
              </p>

              <div className="mt-auto space-y-2">
                <progress className="progress h-3 w-24" value="40" max="100" />
                <progress className="progress h-3 w-36" value="65" max="100" />
                <progress className="progress h-3 w-48" value="80" max="100" />
                <progress
                  className="progress h-3 w-60 progress-primary"
                  value="100"
                  max="100"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
