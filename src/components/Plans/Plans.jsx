import { useState } from "react";
import Navbar from "../Home/Navbar";
import PlansChecker from "./PlansChecker";

export default function Plans() {
  const [isMonthly, setIsMonthly] = useState(true);

  /* =======================
     TOP PLAN CARDS
  ======================= */
 const plansTile = [
  {
    title: "Mailing Plan",
    index: "Get Mailing Address Plan",
    description: "Get a professional address for mail and courier handling.",
    price: 799,
    icon: "solar:global-linear",
    bg: "bg-secondary/80",
    featured: false,
  },
  {
    title: "Dedicated Desk",
    index: "Get Business Plan",
    description: "Ideal for startups to establish strong business presence.",
    price: 6999,
    icon: "solar:rocket-2-bold-duotone",
    bg: "bg-primary",
    featured: true,
  },
  {
    title: "Virtual Office",
    index: "Get Virtual Office Plan",
    description: "Virtual office with permanent desk at prime location.",
    price: 1499,
    icon: "solar:stars-bold-duotone",
    bg: "bg-violet-400",
    featured: false,
  },
];

  /* =======================
     FEATURES MATRIX
  ======================= */
  const plansDetails = [
    { Feature: "Register the New Business Entity", "Get Mailing Address Plan": false, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "Update your Registered Address formally", "Get Mailing Address Plan": false, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "Use the Address for Opening a Bank Account", "Get Mailing Address Plan": false, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "Utilize Address for GST Plan", "Get Mailing Address Plan": false, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "Utilize the provided address for correspondence", "Get Mailing Address Plan": true, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "On-site GST/Departmental Verification", "Get Mailing Address Plan": true, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "Courier Receiving and Forwarding Services", "Get Mailing Address Plan": true, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "Standard / Premium Permanent Signage", "Get Mailing Address Plan": false, "Get Business Plan": false, "Get Virtual Office Plan": true },
    { Feature: "Use Professional Address Across all official Platforms Effectively", "Get Mailing Address Plan": true, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "Meeting Room Access (T&C Apply)", "Get Mailing Address Plan": true, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "Temporary Signage Assurance (name)", "Get Mailing Address Plan": false, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "Unique Desk Number", "Get Mailing Address Plan": false, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "On-Site Support during field-visit", "Get Mailing Address Plan": false, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "Permanent Signage (entry)", "Get Mailing Address Plan": false, "Get Business Plan": false, "Get Virtual Office Plan": true },
    { Feature: "IVR facility Support (At Additional cost)", "Get Mailing Address Plan": true, "Get Business Plan": true, "Get Virtual Office Plan": true },
    { Feature: "No Hidden Charges", "Get Mailing Address Plan": true, "Get Business Plan": true, "Get Virtual Office Plan": true },
  ];

  /* =======================
     YEARLY PRICE
  ======================= */
  const yearlyPrice = (price) => {
    const total = price * 12;
    return total - Math.round(total * 0.05);
  };

  return (
    <section className="w-full relative pt-4 px-4">
      <Navbar />
      <div className="top_gem" />

      <div className="max-w-[1440px] mx-auto py-12 lg:py-20">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-y-4">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            Your Next Step, Made Simple
          </h2>
          <p className="max-w-[650px] text-sm">
            From idea to execution, our flexible pricing adapts to every stage of
            your journey—no hidden fees, just growth-focused solutions.
          </p>

          {/* SWITCHER */}
          <div className="p-2 rounded-full plan_switcher flex gap-2 mt-6">
            <button
              onClick={() => setIsMonthly(true)}
              className={`btn rounded-full w-28 lg:w-40 h-12 font-semibold ${
                isMonthly ? "btn-primary" : "btn-soft"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setIsMonthly(false)}
              className={`btn rounded-full w-28 lg:w-40 h-12 font-semibold ${
                !isMonthly ? "btn-primary" : "btn-soft"
              }`}
            >
              Yearly
            </button>

            <button
              onClick={() => setIsMonthly(false)}
              className={`btn rounded-full w-24 lg:w-28 h-12 font-semibold ${
                !isMonthly ? "btn-primary" : "btn-soft"
              }`}
            >
              Save 5%
            </button>
          </div>
        </div>

        {/* =======================
            PLAN CARDS
        ======================= */}
        <div className="grid lg:grid-cols-3 gap-6 mt-14">
          {plansTile.map((plan, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl backdrop-blur-xl relative ${
                plan.featured
                  ? "bg-primary/10 border border-primary"
                  : "bg-white/10 border border-primary/30"
              }`}
            >
              <div className="flex items-center gap-3 relative">
                <span className={`${plan.bg} p-2 rounded-md`}>
                  <span className={`${plan.icon} text-white text-2xl`} />
                </span>
                <h4 className="text-2xl font-semibold">{plan.title}</h4>

                {plan.featured && (
                  <span className="badge badge-primary absolute right-0">
                    Most Popular
                  </span>
                )}
              </div>

              <p className="text-sm lg:text-lg my-4">
                {plan.description}
              </p>

              <div className="flex items-end gap-2 mb-4">
                <h4 className="text-3xl lg:text-4xl font-semibold">
                  ₹{isMonthly ? plan.price : yearlyPrice(plan.price)}
                </h4>
                <p>{isMonthly ? "/ per month" : "/ per year"}</p>
              </div>

              {/* FEATURE PREVIEW */}
              <table className="table">
                <tbody>
                  {plansDetails.slice(0, 8).map((row, i) => (
                    <tr key={i}>
                      <td className="px-0 flex items-center gap-3">
                        <PlansChecker optionDetail={row[plan.index]} />
                        <span className="line-clamp-1">
                          {row.Feature}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        {/* =======================
            FULL COMPARISON TABLE
        ======================= */}
        {[plansDetails.slice(0, 8), plansDetails.slice(8)].map((chunk, idx) => (
          <div
            key={idx}
            className="mt-10 bg-white/10 border border-primary/20 rounded-xl overflow-x-auto"
          >
            <table className="table">
              <tbody>
                {chunk.map((row, i) => (
                  <tr key={i} className="h-16">
                    <td className="font-medium">{row.Feature}</td>
                    <td className="text-center">
                      <PlansChecker optionDetail={row["Get Mailing Address Plan"]} />
                    </td>
                    <td className="text-center">
                      <PlansChecker optionDetail={row["Get Business Plan"]} />
                    </td>
                    <td className="text-center">
                      <PlansChecker optionDetail={row["Get Virtual Office Plan"]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

      </div>
    </section>
  );
}
