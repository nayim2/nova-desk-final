import { useRef } from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { assets } from "../../assets/assets";

export default function Testimonials() {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      rating: "5.0",
      img: assets.testimonial1,
      text:
        "From the first call to final delivery, the process was seamless. We now have a brand that truly reflects who we are",
      author: "Julian Meyer",
      designation: "Marketing at NovaTech",
    },
    {
      rating: "3.9",
      img: assets.testimonial2,
      text:
        "They completely reshaped the way we present ourselves online. The clarity, execution were flawless",
      author: "Amanda More",
      designation: "Founder of Bloom Agency",
    },
    {
      rating: "4.7",
      img: assets.testimonial3,
      text:
        "Professional, strategic, and highly creative. They felt more like a partner than a service provider, highly recommended",
      author: "Ava Rossi",
      designation: "Head at Horizon Ventures",
    },
    {
      rating: "4.2",
      img: assets.testimonial4,
      text:
        "The team brought bold ideas and real results. Our site traffic has doubled, and the feedback has been incredible",
      author: "Leo Daniels",
      designation: "CEO of Frame & Co.",
    },
  ];

  return (
    <section className="w-full bg-[#ee5a3f] px-6 py-16 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-10">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 border border-white/40 rounded-lg text-white text-sm mb-4">
            <Icon icon="solar:add-circle-outline" />
            Client Stories
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            What they think
          </h2>
        </div>

        <p className="max-w-xl text-white text-lg leading-relaxed">
          From startups to global brands, we’ve delivered impactful solutions.
          Explore some of our latest projects
        </p>

        {/* DESKTOP ARROWS */}
        <div className="hidden lg:flex items-start gap-3">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="w-12 h-12 rounded-lg border border-white/40 flex items-center justify-center text-white"
          >
            <Icon icon="solar:arrow-left-outline" className="text-xl" />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="w-12 h-12 rounded-lg border border-white/40 flex items-center justify-center text-white"
          >
            <Icon icon="solar:arrow-right-outline" className="text-xl" />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="max-w-[1440px] mx-auto mt-14">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          spaceBetween={24}
          slidesPerView="auto"
          speed={600}
          className="!overflow-visible"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!w-[420px]"
            >
              <div className="border border-white/30 rounded-2xl p-8 bg-transparent h-full">
                {/* TOP */}
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-black">
                        {item.rating}
                      </span>
                      <span className="text-black">/5</span>
                    </div>

                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          icon="solar:star-bold"
                          className="text-black"
                        />
                      ))}
                    </div>
                  </div>

                  <img
                    src={item.img}
                    alt={item.author}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                </div>

                {/* TEXT */}
                <p className="mt-10 text-black text-lg leading-relaxed">
                  {item.text}
                </p>

                {/* AUTHOR */}
                <div className="mt-12 text-black">
                  <p className="font-semibold">{item.author}</p>
                  <p className="text-sm">{item.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* MOBILE ARROWS */}
      <div className="flex lg:hidden justify-between mt-8">
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="w-12 h-12 rounded-lg border border-white/40 flex items-center justify-center text-white"
        >
          <Icon icon="solar:arrow-left-outline" />
        </button>
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="w-12 h-12 rounded-lg border border-white/40 flex items-center justify-center text-white"
        >
          <Icon icon="solar:arrow-right-outline" />
        </button>
      </div>
    </section>
  );
}
