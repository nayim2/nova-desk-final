import { Icon } from "@iconify/react";
import Navbar from "../Home/Navbar";

export default function AboutHero() {
  return (
    <section className="w-full lg:min-h-[760px] lg:h-auto relative py-4 px-4">
      <Navbar />

      <div className="top_gem"></div>

      <div className="w-full h-[calc(100%-80px)] sticky z-30 max-lg:block">
        <div
          className="max-w-[1440px] max-md:min-h-[480px] h-full 
                     bg-white/20 border border-primary/20 
                     rounded-2xl backdrop-blur-xl 
                     mx-auto flex items-start justify-start 
                     max-md:pb-4 md:px-4 xl:px-0 mt-4"
        >
          <div className="w-full p-6 md:p-12 lg:p-28 space-y-6 flex flex-col items-start">

            {/* MINI TITLE */}
            <span className="hero-mini max-md:w-[40%] max-md:mx-auto flex items-center justify-center gap-x-2">
              <Icon icon="solar:add-circle-broken" className="text-xl" />
              Our story
            </span>

            {/* TITLE */}
            <h1 className="text-4xl font-bold text-primary max-md:text-center max-md:w-full">
              Who we are!
            </h1>

            {/* PARAGRAPHS */}
            <p className="md:text-lg md:pr-40">
              Welcome to Novadesk Realtech, your premier virtual office services
              provider in India. At Novadesk, we are dedicated to revolutionizing
              the way businesses operate by offering a comprehensive suite of
              virtual office solutions tailored to meet the dynamic needs of
              modern enterprises.
            </p>

            <p className="md:text-lg md:pr-40">
              At Novadesk, we understand the evolving business landscape and
              strive to provide personalized, scalable solutions that drive
              success and foster growth for our clients. By tailoring our
              services to meet the unique needs of each business, we help our
              clients stay agile, reduce costs, and focus on their core
              activities while we manage their virtual office needs efficiently.
            </p>

            {/* VISION & MISSION */}
            <div className="w-full flex max-md:flex-col items-start justify-evenly gap-6 pt-6">

              {/* VISION */}
              <div className="w-1/2 max-md:w-full text-xl font-medium flex flex-col gap-y-2">
                <span className="flex items-center gap-x-2 font-semibold text-primary">
                  <Icon icon="solar:lightbulb-bolt-broken" className="text-xl" />
                  VISION
                </span>
                <p className="max-md:text-lg">
                  To become a leading force in digital innovation, inspiring
                  brands worldwide to embrace transformative strategies for
                  enduring success and influence.
                </p>
              </div>

              {/* MISSION */}
              <div className="w-1/2 max-md:w-full text-xl font-medium flex flex-col gap-y-2">
                <span className="flex items-center gap-x-2 font-semibold text-primary">
                  <Icon icon="solar:rocket-broken" className="text-xl" />
                  MISSION
                </span>
                <p className="max-md:text-lg">
                  To empower brands by delivering bold digital strategies that
                  drive meaningful growth, create lasting impact, and achieve
                  sustained success.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
