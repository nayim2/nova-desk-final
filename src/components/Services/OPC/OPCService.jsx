import { useEffect, useState } from "react";
import ServicesImageCard from "../PrivateLimited/ServiceImageCard";
// import ServicesSubService1 from "./ServicesSubService1";
// import ServicesSubMarquee from "./ServicesSubMarquee";

export default function OPCService() {
  const [currentView, setCurrentView] = useState("docs");

  /* -----------------------
     LEFT MENU LINKS
  ------------------------ */
  const links = [
    { text: "Documents required for registration", key: "docs" },
    { text: "Incorporation Process", key: "process" },
    { text: "Compliances & Requirements", key: "compliance" },
    { text: "Advantages", key: "advantages" },
    { text: "Disadvantages", key: "disadvantages" },
    { text: "Registration Number", key: "reg" },
    { text: "How to Get Registration Number", key: "getnumber" },
    { text: "Registration Time", key: "time" },
    { text: "Fees", key: "fee" },
    { text: "Checklist for Registration", key: "checklist" },
  ];

  /* -----------------------
     HEADER CONTENT
  ------------------------ */
  const companyTypes = {
    title: "One Person Company (OPC)",
    long: "A One Person Company (OPC) is a modern business structure introduced under the Companies Act, 2013. It allows a single entrepreneur to enjoy the benefits of limited liability and a separate legal identity while maintaining full control of the business.",
    small:
      "A single-owner company model with limited liability and corporate identity.",
  };

  /* -----------------------
     PAGE CONTENT
  ------------------------ */
  const registrationInfo = [
    {
      title: "Documents Required to Register a One Person Company",
      key: "docs",
      list: [
        {
          title: "Identity Proof and Address Proof",
          list: [
            "Passport / Aadhar / Voter ID / Driver's License",
            "PAN card",
            "Utility bill or Bank Statement",
          ],
        },
        {
          title: "Proof of Registered Office",
          list: [
            "Owned: Latest electricity bill or tax receipt",
            "Rented: Rent agreement or No Objection Certificate (NOC)",
          ],
        },
        {
          title: "MOA & AOA Documents",
          list: [
            "Memorandum of Association (MOA)",
            "Articles of Association (AOA)",
          ],
        },
        {
          title: "Director & Nominee Declarations",
          list: [
            "Form DIR-2 (Director Consent)",
            "Form INC-9 (Director Declaration)",
            "Form INC-3 (Nominee Consent)",
          ],
        },
      ],
    },

    {
      title: "One Person Company Incorporation Process",
      key: "process",
      list: [
        {
          title: "Obtain DSC",
          desc: "Required to digitally sign forms on the MCA portal.",
        },
        {
          title: "SPICe+ Part A – Name Reservation",
          desc: "Submit proposed names with one resubmission option.",
        },
        {
          title: "SPICe+ Part B – Company Registration",
          list: [
            "Submit DSC, e-MOA & e-AOA",
            "Upload declarations",
            "Pay government fees",
          ],
        },
        {
          title: "Open Bank Account",
          desc: "Processed through AGILE-PRO-S (INC-35).",
        },
        {
          title: "File INC-20A",
          desc: "Commencement Certificate within 180 days.",
        },
      ],
    },

    {
      title: "Compliances for One Person Company",
      key: "compliance",
      list: [
        {
          title: "Director Requirements",
          list: ["Minimum 1 director", "Nominee mandatory"],
        },
        {
          title: "Annual Compliances",
          list: [
            "MGT-7 Annual Return",
            "AOC-4 Financial Statement",
            "ADT-1 Auditor Appointment",
            "DIR-3 KYC",
          ],
        },
        {
          title: "Tax Rates",
          list: ["30% Corporate Tax + Surcharge + 4% Cess"],
        },
      ],
    },

    {
      title: "Advantages of One Person Company",
      key: "advantages",
      list: [
        "Limited liability protection",
        "Separate legal entity",
        "Simple management structure",
        "Nominee ensures continuity",
        "Higher credibility",
      ],
    },

    {
      title: "Disadvantages of One Person Company",
      key: "disadvantages",
      list: [
        "Only one shareholder allowed",
        "Cannot perform NBFC activities",
        "Higher compliance than proprietorship",
      ],
    },

    {
      title: "One Person Company Registration Number",
      key: "reg",
      desc: "A 21-character Corporate Identification Number (CIN) issued by MCA.",
    },

    {
      title: "How to Get Registration Number",
      key: "getnumber",
      desc: "Once SPICe+ is approved, MCA issues the Certificate of Incorporation containing CIN, PAN, and TAN.",
    },

    {
      title: "One Person Company Registration Time",
      key: "time",
      list: [
        "Average 7–10 working days",
        "May vary due to documentation or MCA resubmission",
      ],
    },

    {
      title: "One Person Company Registration Fees",
      key: "fee",
      desc: "₹1,499 + Government fees (state dependent).",
    },

    {
      title: "Checklist for Registration",
      key: "checklist",
      list: [
        "Obtain DSC",
        "Nominee consent (INC-3)",
        "Reserve company name",
        "Submit SPICe+ application",
        "Receive Certificate of Incorporation",
        "Open current account",
      ],
    },
  ];

  /* -----------------------
     SCROLL SPY
  ------------------------ */
  useEffect(() => {
    const onScroll = () => {
      registrationInfo.forEach((item) => {
        const el = document.getElementById(item.key);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setCurrentView(item.key);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (key) => {
    setCurrentView(key);
    document.getElementById(key)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* OPTIONAL SECTIONS */}
      {/* <ServicesSubService1 /> */}
      {/* <ServicesSubMarquee /> */}

      <section className="w-full">
        <ServicesImageCard
          title={companyTypes.title}
          long={companyTypes.long}
          small={companyTypes.small}
        />

        <div className="max-w-[1440px] mx-auto flex flex-col mt-8">
          <div className="flex flex-col md:flex-row gap-x-8">
            {/* LEFT STICKY MENU */}
            <aside className="hidden md:block sticky top-20 h-screen px-6">
              <ul className="border-r border-slate-500">
                {links.map((i) => (
                  <li
                    key={i.key}
                    className={`py-4 pr-6 cursor-pointer service_li ${
                      currentView === i.key ? "service_li_active" : ""
                    }`}
                    onClick={() =>
                      document.getElementById(i.key)?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    {i.text}
                  </li>
                ))}
              </ul>
            </aside>

            {/* CONTENT */}
            <div className="w-full md:w-[60%] md:pl-8">
              {registrationInfo.map((i) => (
                <div key={i.key} id={i.key} className="mb-8">
                  <h4 className="text-xl lg:text-2xl text-orange-600 font-bold my-2">
                    {i.title}
                  </h4>

                  {i.desc && <p className="text-sm mb-3">{i.desc}</p>}

                  {i.list && (
                    <ul className="ml-6 space-y-2 list-decimal">
                      {i.list.map((v, idx) => (
                        <li key={idx}>
                          {typeof v === "string" ? (
                            v
                          ) : (
                            <>
                              {v.title && (
                                <p className="font-medium">{v.title}</p>
                              )}
                              {v.desc && <p className="text-sm">{v.desc}</p>}
                              {v.list && (
                                <ul className="ml-6 list-disc">
                                  {v.list.map((x, z) => (
                                    <li key={z}>{x}</li>
                                  ))}
                                </ul>
                              )}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
