import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HomeMarquee({ marquee = [], className = "" }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 70,
      repeat: -1,
    });
  }, []);

  return (
    <div className={`marquee-container ${className}`}>
      <div ref={marqueeRef} className="marquee-content gap-x-6">
        {[...marquee, ...marquee].map((item, index) => (
          <span key={index} className="flex items-center">
            <span>{item}</span>
            <span className="text-6xl px-6">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
