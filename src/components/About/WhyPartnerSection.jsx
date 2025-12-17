import { Icon } from "@iconify/react";

export default function WhyPartnerSection() {
  return (
    <section className="w-full lg:min-h-[640px] xl:h-[60vh] bg-primary py-12 lg:py-24">
      <div className="max-w-[1440px] h-full mx-auto flex flex-col items-start justify-center gap-y-10">

        {/* HEADER */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between">
          <h1 className="w-full md:w-1/2 text-4xl font-bold text-white max-md:text-center">
            Why Partner with Us?
          </h1>

          <p className="w-full md:w-1/2 text-lg font-medium px-0 md:px-10 text-white max-md:text-center max-md:mt-4">
            At Novadesk RealTech, we go beyond providing virtual office space. We
            are dedicated to your success. Our team of experts is available to
            assist you with any queries and ensure a smooth experience. We offer!
          </p>
        </div>

        {/* CARDS */}
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-4 md:pt-8 px-0 md:px-0 max-md:px-4">

          {/* CARD 1 */}
          <div className="w-full md:w-1/3 bg-[#ff8a80] rounded-2xl p-12 flex flex-col items-center justify-center gap-y-4">
            <Icon
              icon="solar:shield-network-broken"
              className="text-6xl text-white"
            />
            <h1 className="text-2xl font-bold text-white text-center">
              A Wide Network of Locations
            </h1>
            <p className="text-center text-white">
              Choose from a variety of virtual office addresses in prominent
              business districts across India.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="w-full md:w-1/3 bg-[#ff8a80] rounded-2xl p-12 flex flex-col items-center justify-center gap-y-4">
            <Icon
              icon="solar:lightbulb-bolt-broken"
              className="text-6xl text-white"
            />
            <h1 className="text-2xl font-bold text-white text-center">
              Seamless Management
            </h1>
            <p className="text-center text-white">
              Enjoy a user-friendly online portal to manage your virtual office
              services and meeting room bookings.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="w-full md:w-1/3 bg-[#ff8a80] rounded-2xl p-12 flex flex-col items-center justify-center gap-y-4">
            <Icon
              icon="solar:hand-stars-broken"
              className="text-6xl text-white"
            />
            <h1 className="text-2xl font-bold text-white text-center">
              Unwavering Support
            </h1>
            <p className="text-center text-white">
              Our dedicated team is always happy to answer your questions and
              provide the support you need to thrive.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
