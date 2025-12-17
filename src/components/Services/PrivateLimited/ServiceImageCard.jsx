import { Icon } from "@iconify/react";
import { assets } from "../../../assets/assets";

export default function ServicesImageCard({ title, long, small }) {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT – IMAGE */}
          <div className="w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden">
            <img
              src={assets.assistant2}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div className="flex flex-col gap-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              {title}
            </h2>

            {/* Desktop description */}
            <p className="text-base md:text-lg text-gray-700 hidden md:block leading-relaxed">
              {long}
            </p>

            {/* Mobile description */}
            <p className="text-base text-gray-700 block md:hidden leading-relaxed">
              {small}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
