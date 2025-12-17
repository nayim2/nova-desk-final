import { Icon } from "@iconify/react";
import './Sub.css'

const reviews = [
  {
    content:
      "Amazing experience - especially Sneha Savalgi who helped us out with everything. Very proactive communication and patience on their end even after unresponsiveness on our side",
    author: "Vetriventhan K",
    para: "Bicameral Mind Technologies",
  },
  {
    content:
      "Everything was so so soo smooth and quick. the team you partnered with was very helpful and it was something we did not expect at such low cost. I have referred razorpay to one of my friend and he will also be signing up soon. thanks to the whole team",
    author: "Archit Vats",
    para: "Muzzari Global",
  },
  {
    content:
      "Process was really fast and effortless, really happy with the whole team and will also go ahead with the same vendor post compliances",
    author: "Mayank Sharma",
    para: "Rapparel Solutions",
  },
  {
    content:
      "Seamless experience. Quick response from Poorva who was handling our case",
    author: "Neeraj Sonaniya",
    para: "Kalpify Fashion",
  },
  {
    content:
      "Had a really smooth experience with all the partners, I would like to specially appreciate Ananya for his consistent support. As a first time entrepreneur, I had low awareness on the legalities of starting up, but I was well supported throughout",
    author: "Pulak Rijhwani",
    para: "Opsight AI",
  },
  {
    content:
      "Process was very good, the team was active right from the start and helped us with all doubts",
    author: "Vetriventhan K",
    para: "Bicameral Mind Technologies",
  },
];

export default function ReviewsMarquee() {
  return (
    <section className="w-full min-h-[420px] bg-primary flex items-center overflow-hidden relative">
      <div className="marquee-container">
        <div className="marquee-track">
          {[...reviews, ...reviews].map((value, index) => (
            <div
              key={index}
              className="marquee-card w-96 min-w-96 min-h-80 rounded-2xl border border-white/30 bg-white/20 p-8 text-white"
            >
              <div className="text-base font-medium space-y-2">
                <Icon icon="ri:double-quotes-l" className="text-2xl" />
                <p>{value.content}</p>
                <Icon icon="ri:double-quotes-r" className="text-2xl ml-auto" />
              </div>

              <hr className="my-4 border-white/20" />

              <span className="font-semibold block">{value.author}</span>
              <p className="text-sm opacity-90">{value.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
