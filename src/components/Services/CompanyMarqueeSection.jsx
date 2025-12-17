import { assets } from "../../assets/assets";

const logos = [
  { src: assets.company1, alt: "company_logo" },
  { src: assets.company2, alt: "company_logo" },
  { src: assets.company3, alt: "company_logo" },
  { src: assets.company4, alt: "company_logo" },
  { src: assets.company5, alt: "company_logo" },
  { src: assets.company6, alt: "company_logo" },
  { src: assets.company7, alt: "company_logo" },
  { src: assets.company8, alt: "company_logo" },
  { src: assets.company9, alt: "company_logo" },
];

export default function CompanyMarqueeSection() {
  return (
    <section className="w-full h-auto min-h-[420px] pt-4 overflow-x-hidden">
      {/* MARQUEE */}
      <div className="relative flex items-center justify-center bg-white border border-white overflow-hidden w-full">
        <div className="marquee-container">
          <ul className="marquee-track items-center h-20">
            {[...Array(5)].map((_, dupIndex) =>
              logos.map((logo, index) => (
                <li
                  key={`${logo.alt}-${dupIndex}-${index}`}
                  className="w-40 flex items-center justify-center"
                >
                  <img src={logo.src} alt={logo.alt} className="max-h-28" />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative">
        <div className="top-fade-grid" />

        <div className="max-w-[1440px] mx-auto h-full flex flex-col md:flex-row items-start justify-center gap-x-10 sticky z-20 px-4 py-8 md:py-12 lg:py-24">
          {/* LEFT TEXT */}
          <div className="w-full space-y-6">
            <h1 className="text-4xl font-semibold">Why Novadesk?</h1>
            <p>
              At Novadesk, we go beyond office space—building communities,
              enabling seamless incorporation, and providing resources that fuel
              your journey from idea to success.
            </p>
          </div>

          {/* STATS */}
          <div className="w-full flex justify-between gap-x-4 mt-6 md:mt-0">
            <div className="space-y-2">
              <h1 className="font-semibold text-2xl md:text-4xl">1000+</h1>
              <p className="hidden md:block">Founders in the Community</p>
              <p className="md:hidden">Community</p>
            </div>

            <div className="space-y-2">
              <h1 className="font-semibold text-2xl md:text-4xl">5000+</h1>
              <p className="hidden md:block">Company Registrations</p>
              <p className="md:hidden">Registered</p>
            </div>

            <div className="space-y-2">
              <h1 className="font-semibold text-2xl md:text-4xl">11+</h1>
              <p className="hidden md:block">Backed Startups</p>
              <p className="md:hidden">Startups</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
