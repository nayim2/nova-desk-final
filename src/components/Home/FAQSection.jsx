import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is a Virtual Office?",
      answer:
        "A virtual office provides you with a premium business address and essential office services—without needing to rent or own a physical workspace.",
    },
    {
      question: "Can I use the Virtual Office for Company Registration?",
      answer:
        "Yes, our virtual office plans are fully compliant and include all necessary documentation for seamless company registration.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Once your KYC documents are verified, your virtual office can be activated in as little as 3 working days.",
    },
    {
      question: "Do you provide meeting rooms or workspace access?",
      answer:
        "Yes, depending on your plan, you can book professional meeting rooms and workspace access whenever required.",
    },
    {
      question: "Is my information secure?",
      answer:
        "Absolutely. We follow strict data protection policies to ensure all your personal and business information is safe and confidential.",
    },
  ];

  return (
    <section className="w-full max-h-[980px] h-auto md:min-h-[620px] bg-primary">
      <div className="max-w-[1440px] h-full mx-auto flex flex-col max-md:px-4 py-8 lg:py-16">

        {/* HEADER */}
        <div className="w-full flex items-center justify-between">
          <h4 className="text-2xl md:text-4xl lg:font-semibold lg:leading-12 text-white">
            Frequently Asked Questions
          </h4>

          <Link to="/plans">
            <button className="btn btn-sm md:btn-lg bg-white shadow-none flex items-center gap-x-2">
              See All
              <Icon
                icon="solar:arrow-right-up-linear"
                className="text-xl"
              />
            </button>
          </Link>
        </div>

        {/* FAQ LIST */}
        <div className="w-full flex flex-col gap-y-4 mt-8">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-white/10 border border-white/30 backdrop-blur-sm text-white"
            >
              {/* DaisyUI accordion (radio) */}
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0}
              />

              <div className="collapse-title font-semibold">
                {item.question}
              </div>

              <div className="collapse-content text-sm">
                {item.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
