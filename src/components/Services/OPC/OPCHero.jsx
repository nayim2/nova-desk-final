import { Icon } from "@iconify/react";
import Navbar from "../../Home/Navbar";

export default function OPCHero() {
  return (
    <section className="relative w-full min-h-[100vh] bg-[#fff7f4] overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 pt-24 pb-20">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-20 items-center">
          
          {/* LEFT */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-black">
              Register a One Person Company
            </h1>

            <button className="btn btn-primary px-8">
              Register your business
            </button>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <h4 className="text-primary text-xl font-semibold">
              What’s Included?
            </h4>

            {/* CHECKLIST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 text-black">
              {[
                "Registration in 7-10 Business Days",
                "Company PAN and TAN",
                "Company Name Approval",
                "MOA & AOA",
                "Incorporation Certificate",
                "DSC Tokens",
                "DSC Support & Shipping",
                "Digital Signature Certificate",
                "Director’s Identification Number (DIN)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-x-3">
                  <Icon
                    icon="charm:tick"
                    className="text-primary text-lg mt-1"
                  />
                  <p className="text-base font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-20 items-start">
          
          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Made with <span className="text-red-500">❤️</span> for founders
            </h2>

            <p className="text-lg leading-relaxed text-black/80 max-w-xl">
              Nova Desk is an exclusive early-stage startup program that empowers
              founders by fostering vibrant communities, providing seamless
              company incorporation services & offering dedicated startup
              building programs & resources.
            </p>
          </div>

          {/* RIGHT – STATS */}
          <div className="grid grid-cols-3 gap-x-10 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">5000+</h3>
              <p className="text-black/70 font-medium">
                Companies Registered
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-4xl font-bold">₹1+ Cr</h3>
              <p className="text-black/70 font-medium">
                Money saved for Founders
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-4xl font-bold flex justify-center items-center gap-x-1">
                4.8
                <Icon
                  icon="material-symbols:star-rounded"
                  className="text-primary"
                />
                /5
              </h3>
              <p className="text-black/70 font-medium">
                Customer Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
