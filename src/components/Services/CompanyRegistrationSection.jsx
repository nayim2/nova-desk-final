import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const companyData = [
  {
    title: "Private Limited Company",
    description:
      "Suitable for startups seeking limited liability, fundraising options, and ESOP benefits.",
    icon: "solar:box-minimalistic-broken",
    buttonText: "Learn More",
    link: "/services/private_limited",
  },
  {
    title: "Limited Liability Partnership",
    description:
      "Suitable for professional services seeking limited liability but fewer post-incorporation compliances.",
    icon: "solar:chart-2-broken",
    buttonText: "Learn More",
    link: "/services/llp",
  },
  {
    title: "One Person Company",
    description:
      "Suitable for franchises and small businesses seeking limited liability with single ownership.",
    icon: "solar:hand-stars-broken",
    buttonText: "Learn More",
    link: "/services/opc",
  },
  {
    title: "Goods And Service Tax",
    description:
      "Goods and Services Tax simplifies indirect taxation with a unified, transparent system.",
    icon: "solar:buildings-broken",
    buttonText: "Learn More",
    link: "/services/private_limited",
  },
];

export default function CompanyRegistrationSection() {
  return (
    <section className="w-full bg-primary px-4 pt-10 pb-6 md:py-12 lg:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl">
            Hassle-free{" "}
            <b className="text-white">Company Registrations</b>
          </h1>
          <p className="max-w-2xl mx-auto">
            Choose from the most popular company types and get seamless
            registration at No Hidden Charges
          </p>
        </div>

        {/* CARDS */}
        <div className="w-full mt-6 md:mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 md:py-10">
          {companyData.map((item, index) => (
            <div
              key={index}
              className="w-full min-h-[440px] bg-[#ff8a80] rounded-4xl p-8 flex flex-col justify-between"
            >
              {/* ICON */}
              <div className="size-12 lg:size-16 bg-white rounded-xl flex items-center justify-center">
                <Icon
                  icon={item.icon}
                  className="text-2xl lg:text-3xl text-primary"
                />
              </div>

              {/* CONTENT */}
              <div className="space-y-6 mt-4">
                <h2 className="text-3xl md:text-4xl">{item.title}</h2>
                <p>{item.description}</p>

                <Link
                  to={item.link}
                  className="content-mini inline-block cursor-pointer"
                >
                  {item.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
