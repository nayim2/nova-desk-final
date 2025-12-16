import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section className="w-full h-[90vh] lg:min-h-[760px] lg:h-auto xl:h-[90vh] relative pt-4 px-4">

      <Navbar />

      <div className="top_gem"></div>

      {/* MOBILE / TABLET VIEW */}
      <div className="w-full h-[calc(100%-80px)] sticky z-30 max-lg:block hidden">
        <div className="max-w-[1440px] max-md:min-h-[480px] h-full mx-auto flex flex-col lg:flex-row items-center justify-center max-md:pb-4 md:px-4 xl:px-0">
          <div className="w-full lg:w-1/2 h-full flex flex-col items-center lg:items-start justify-center gap-y-4">
            <span className="hero-mini">Building Brands That Last</span>

            <h3 className="hero-title">
              From startup to enterprise—get, register,
              <span className="text-primary"> effortlessly.</span>
            </h3>

            <p className="hero-sub">
              We offer professional business addresses that empower entrepreneurs
              to register, grow, and scale—built for trust, flexibility, and
              lasting impact.
            </p>

            <span className="w-full pt-0.5 my-4 bg-primary hero-border"></span>

            <span className="w-full flex items-center justify-center lg:justify-start gap-x-4 hero-group">
              <div className="avatar-group -space-x-6">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/52.jpg",
                  "https://randomuser.me/api/portraits/women/55.jpg",
                ].map((img, i) => (
                  <div className="avatar" key={i}>
                    <div className="w-12 rounded-full overflow-hidden">
                      <img src={img} alt="user" />
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Trusted by 5,000+ <br />
                worldwide users
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="top_gem max-lg:hidden block">
        <div className="max-w-[1440px] h-full mx-auto flex flex-col lg:flex-row items-center justify-center md:px-4 xl:px-0">
          <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col items-center lg:items-start justify-center gap-y-4 max-lg:pt-[86px]">
            <span className="hero-mini">Building Brands That Last</span>

            <h3 className="hero-title">
              From startup to enterprise—get, register,
              <span className="text-primary"> effortlessly.</span>
            </h3>

            <p className="hero-sub">
              We offer professional business addresses that empower entrepreneurs
              to register, grow, and scale—built for trust, flexibility, and
              lasting impact.
            </p>

            <span className="w-full pt-0.5 my-4 bg-primary hero-border"></span>

            <span className="w-full flex items-center justify-center lg:justify-start gap-x-4 hero-group">
              <div className="avatar-group -space-x-6">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/52.jpg",
                  "https://randomuser.me/api/portraits/women/55.jpg",
                ].map((img, i) => (
                  <div className="avatar" key={i}>
                    <div className="w-12 rounded-full overflow-hidden">
                      <img src={img} alt="user" />
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Trusted by 5,000+ <br />
                worldwide users
              </p>
            </span>
          </div>

          {/* FORM */}
          <div className="w-1/2 h-full hidden lg:flex items-center justify-end relative pt-[80px]">
            <div className="h-auto w-[450px] bg-white/10 border border-primary/20 backdrop-blur-3xl px-6 py-8 rounded-md shadow-md">
              <div className="px-4 space-y-3">
                {["Name", "Phone", "Email", "Location"].map((label) => (
                  <fieldset className="fieldset w-full" key={label}>
                    <legend className="fieldset-legend text-primary hidden lg:block">
                      {label}
                    </legend>
                    <input
                      type="text"
                      className="input input-primary !outline-none !shadow-none w-full"
                      placeholder={label}
                    />
                  </fieldset>
                ))}

                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-primary hidden lg:block">
                    Message
                  </legend>
                  <textarea
                    rows={3}
                    className="textarea textarea-primary w-full"
                    placeholder="Message"
                  ></textarea>
                </fieldset>

                <button className="btn btn-primary w-full mt-4">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
