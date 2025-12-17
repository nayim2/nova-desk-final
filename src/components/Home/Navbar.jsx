import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { assets } from "../../assets/assets";

const Navbar = ({ loggedIn = false }) => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <section className="w-full sticky top-4 z-40 flex justify-center px-4">
        <nav className="navst flex items-center justify-between w-full max-w-[1440px] rounded-3xl bg-white/80 backdrop-blur-xl border border-primary/30 shadow-[0_10px_40px_-15px_rgba(234,90,62,0.6)] px-6 py-4">
          
          {/* LOGO */}
          <img
            src={assets.logo}
            alt="Novadesk"
            className="h-6 md:h-10 w-auto"
          />

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex items-center gap-x-8 text-sm font-medium text-neutral-content">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Service</Link></li>
            <li><Link to="/plans">Plans</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-x-3">
            {!loggedIn ? (
              <>
                {/* CALL */}
                <button className="hidden lg:flex items-center gap-x-2 text-sm font-medium">
                  <Icon
                    icon="solar:phone-calling-linear"
                    className="text-lg text-neutral-content"
                  />
                  Call Us
                </button>

                {/* LETS TALK */}
                <button className="btn btn-primary hidden md:flex rounded-lg">
                  Lets Talk
                </button>

                
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="btn btn-primary hidden md:flex rounded-lg"
                >
                  Dashboard
                </Link>

                <Link
                  to="/admin"
                  className="btn btn-outline btn-primary hidden md:flex rounded-lg"
                >
                  Admin
                </Link>
              </>
            )}

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileNav(!mobileNav)}
              className="btn btn-primary btn-square lg:hidden"
            >
              {mobileNav ? (
                <Icon icon="material-symbols:close-rounded" className="text-lg" />
              ) : (
                <Icon icon="solar:hamburger-menu-linear" className="text-lg" />
              )}
            </button>
          </div>
        </nav>
      </section>

      {/* MOBILE NAV */}
      <div
        className={`fixed top-0 left-0 z-50 h-dvh w-screen bg-white/40 backdrop-blur-xl transition-all duration-300
          ${mobileNav ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="px-6 py-8">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <p className="text-lg font-semibold">Menu</p>
            <button onClick={() => setMobileNav(false)}>
              <Icon
                icon="material-symbols:close-rounded"
                className="text-3xl"
              />
            </button>
          </div>

          <ul className="mt-6 space-y-6">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Plans", path: "/plans" },
              { name: "About Us", path: "/about-us" },
              { name: "Contact Us", path: "/contact-us" }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setMobileNav(false)}
                  className="block text-xl font-medium text-black/80 hover:text-black"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* CTA */}
            <li className="pt-6">
              <Link
                to="/contact-us"
                onClick={() => setMobileNav(false)}
                className="block w-full text-center bg-primary text-white py-3 rounded-xl text-lg font-semibold shadow-lg"
              >
                Let’s Talk
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
