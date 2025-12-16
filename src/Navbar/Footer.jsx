import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <section className="w-full max-h-[1150px] h-auto bg-white relative">
      
      {/* BACKGROUND EFFECT */}
      <div className="top_gem absolute inset-0 z-0" />

      <footer className="relative z-10 max-w-[1440px] w-full mx-auto flex flex-col justify-center items-center px-4 py-6 lg:px-10 lg:py-8">

        {/* TOP ROW */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-b border-primary/20 pb-6 lg:pb-10">

          {/* NEWSLETTER */}
          <div className="w-full md:w-[30%] space-y-6 md:space-y-10">
            <h1 className="text-4xl font-semibold">
              Subscribe to <br className="max-lg:block hidden" />
              our newsletter
            </h1>

            <div className="flex items-center justify-between border-b">
              <input
                type="text"
                className="outline-none w-full mr-4 h-20 text-xl text-black font-medium placeholder:pl-2"
                placeholder="Your email address"
              />

              <Link
                to="/contact-us"
                className="px-8 py-4 rounded-full flex items-center justify-center text-black hover:bg-primary/20"
              >
                <Icon
                  icon="solar:arrow-right-linear"
                  className="text-3xl"
                />
              </Link>
            </div>
          </div>

          {/* COLUMN 1 */}
          <div className="w-full md:w-auto flex flex-col items-start gap-y-6 text-xl font-medium max-md:mt-8">
            <Link className="hover:text-primary" to="/">Home</Link>
            <Link className="hover:text-primary" to="/feature">Feature</Link>
            <Link className="hover:text-primary" to="/pricing">Pricing</Link>
            <Link className="hover:text-primary" to="/faq">FAQ&apos;s</Link>
          </div>

          {/* COLUMN 2 */}
          <div className="w-full md:w-auto flex flex-col items-start gap-y-6 text-xl font-medium max-md:mt-8">
            <Link className="hover:text-primary" to="/contact-us">Contact Us</Link>
            <Link className="hover:text-primary" to="/about-us">About Us</Link>
            <Link className="hover:text-primary" to="/terms-conditions">
              Terms & Conditions
            </Link>
            <Link className="hover:text-primary" to="/privacy-policy">
              Privacy Policy
            </Link>
          </div>

          {/* COLUMN 3 */}
          <div className="w-full md:w-auto flex flex-col items-start gap-y-6 text-xl font-medium max-md:mt-8 md:mt-4">
            <span>15C, Ravi Plaza, 60Ft Road,</span>
            <span>Opp MedPlus, Bus Stand, Kumbakonam,</span>
            <span>Thanjavur - 612001, Tamil Nadu, India</span>

            <div className="flex items-center gap-x-4">
              <a
                href="https://elg.foundation"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-200 px-3 py-3 rounded-full hover:bg-primary hover:text-white"
              >
                <Icon icon="mdi:globe" className="text-3xl" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-200 px-3 py-3 rounded-full hover:bg-primary hover:text-white"
              >
                <Icon icon="mdi:linkedin" className="text-3xl" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-200 px-3 py-3 rounded-full hover:bg-primary hover:text-white"
              >
                <Icon icon="mdi:instagram" className="text-3xl" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between max-md:mt-4 lg:py-10">
          <div className="flex items-center gap-x-2 text-lg text-primary max-md:mt-4">
            <Icon icon="solar:copyright-linear" />
            <h1>
              <b>2025 Novadesk</b> – All Rights Reserved.
            </h1>
          </div>
        </div>
      </footer>
    </section>
  );
}
