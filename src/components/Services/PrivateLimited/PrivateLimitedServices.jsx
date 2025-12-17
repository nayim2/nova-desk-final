import { useEffect, useState } from "react";
import ServicesImageCard from "./ServiceImageCard";
// import ServicesSubService1 from "./ServicesSubService1";
// import ServicesSubMarquee from "./ServicesSubMarquee";

export default function PrivateLimitedService() {
  const [currentView, setCurrentView] = useState(null);

  const links = [
    { text: "Documents required for registration", key: "docs" },
    { text: "Incorporation Process", key: "process" },
    { text: "Compliances & Requirements", key: "compliance" },
    { text: "Advantages", key: "advantages" },
    { text: "Disadvantages", key: "disadvantages" },
    { text: "Registration Number", key: "reg" },
    { text: "Registration Time", key: "time" },
    { text: "Fees", key: "fee" },
    { text: "Checklist for Registration", key: "checklist" },
  ];

  const companyTypes = {
    title: "Private Limited Company",
    long:
      "A Private Limited Company is one of the most widely adopted business structures in India, regulated by the Companies Act, 2013 under the Ministry of Corporate Affairs (MCA). It requires a minimum of two directors and two shareholders to be incorporated. At least one director must be a resident of India. This structure is ideal for startups focused on scalability, credibility, and fundraising.",
    small:
      "A widely adopted business structure requiring at least two directors and two shareholders, offering credibility, limited liability, and ease of fundraising.",
  };

  const registrationInfo = [
    {
      title: "Documents Required to Register a Private Limited Company",
      key: "docs",
      list: [
        {
          title: "Identity Proof and Address Proof",
          list: [
            "Passport / Aadhar card / Voter ID / Driver's License",
            "PAN card",
            "Utility bills or Bank Statements",
          ],
        },
        {
          title: "Proof of Registered Office",
          list: [
            "Ownership proof – Utility bill not older than 30 days",
            "Rental Agreement or NOC from owner",
          ],
        },
        {
          title: "MOA & AOA",
          list: [
            "MOA defines objectives",
            "AOA defines governance rules",
          ],
        },
        {
          title: "Director Declaration",
          desc: "Form INC-9 and DIR-2",
        },
      ],
    },
    {
      title: "Private Limited Company Incorporation Process",
      key: "process",
      list: [
        "Obtain Digital Signature Certificate (DSC)",
        "Apply Name Approval via SPICe+ Part A",
        {
          title: "Apply via SPICe+ Part B",
          list: [
            "DIN allotment",
            "Company incorporation",
            "e-MOA & e-AOA",
            "PAN & TAN application",
            "EPFO & ESIC registration",
          ],
        },
        "Open Current Account",
        "File INC-20A",
      ],
    },
    {
      title: "Compliances for Private Limited Company",
      key: "compliance",
      list: [
        {
          title: "For Directors",
          list: [
            "Minimum 2 directors",
            "At least one Indian resident director",
          ],
        },
        {
          title: "For Company",
          list: [
            "First Board Meeting within 30 days",
            "Annual General Meeting",
            "File AOC-4 & MGT-7",
            "File ITR-6 annually",
          ],
        },
      ],
    },
    {
      title: "Advantages of Private Limited Company",
      key: "advantages",
      list: [
        "Limited liability",
        "Separate legal entity",
        "Easy fundraising",
        "Perpetual succession",
      ],
    },
    {
      title: "Disadvantages of Private Limited Company",
      key: "disadvantages",
      list: [
        "High compliance cost",
        "Complex closure process",
        "Mandatory audits",
      ],
    },
    {
      title: "Registration Number",
      key: "reg",
      desc:
        "A 21-digit Corporate Identification Number (CIN) is issued after incorporation.",
    },
    {
      title: "Registration Time",
      key: "time",
      list: [
        "7–10 working days after filing",
        "May vary based on MCA approval",
      ],
    },
    {
      title: "Fees",
      key: "fee",
      desc: "₹1,499 + Government Fees",
    },
    {
      title: "Checklist for Registration",
      key: "checklist",
      list: [
        "Obtain DSC",
        "Reserve Company Name",
        "Submit SPICe+",
        "Receive COI",
        "Open Bank Account",
      ],
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      registrationInfo.forEach((item) => {
        const el = document.getElementById(item.key);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setCurrentView(item.key);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* <ServicesSubService1 />
      <ServicesSubMarquee /> */}

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
                              {v.desc && (
                                <p className="text-sm">{v.desc}</p>
                              )}
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
