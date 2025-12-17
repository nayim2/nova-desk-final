import { useEffect, useState } from "react";
import ServicesImageCard from "../PrivateLimited/ServiceImageCard";
// import ServicesSubService1 from "./ServicesSubService1";
// import ServicesSubMarquee from "./ServicesSubMarquee";

export default function LLPService() {
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
    title: "Limited Liability Partnership (LLP)",
    long:
      "A Limited Liability Partnership (LLP) is a popular form of business registration in India. It combines the flexibility of a partnership with the benefits of limited liability and a separate legal identity, making it ideal for SMEs and professionals.",
    small:
      "A flexible partnership with limited liability and separate legal identity, suitable for SMEs and professionals.",
  };

  const registrationInfo = [
    {
      title: "Documents Required to Register a Limited Liability Partnership",
      key: "docs",
      list: [
        {
          title: "Identity Proof and Address Proof",
          list: [
            "Passport / Aadhar card / Voter ID / Driver's License of partners",
            "PAN card",
            "Utility bills or Bank Statements as address proof",
          ],
        },
        {
          title: "Proof of Registered Office",
          list: [
            "Any utility bill not older than 30 days",
            "Rental Agreement or No Objection Certificate (NOC)",
          ],
        },
        {
          title: "Declaration and Consent of Partners",
          desc: "Form DIR-9 is used as official consent to become a partner.",
        },
      ],
    },
    {
      title: "Limited Liability Partnership Incorporation Process",
      key: "process",
      list: [
        {
          title: "Obtain a Digital Signature Certificate (DSC)",
          desc: "DSC is required for digitally signing government documents.",
        },
        {
          title: "Name Approval",
          desc: "Apply through LLP-RUN form.",
        },
        {
          title: "LLP Registration",
          list: [
            "Submit FiLLiP form",
            "Subscriber Sheet & Consent of Partners",
          ],
        },
        {
          title: "Submit LLP Agreement",
          desc: "File Form 3 within 30 days of incorporation.",
        },
        "Open a current account",
        "File Commencement Certificate",
      ],
    },
    {
      title: "Compliances for Limited Liability Partnership",
      key: "compliance",
      list: [
        {
          title: "For Partners",
          list: [
            "Minimum of two partners",
            "No upper limit on number of partners",
          ],
        },
        {
          title: "For the LLP",
          list: [
            "File LLP Agreement within 30 days",
            "Annual Returns – Form 8 & Form 11",
            "File Income Tax Return",
          ],
        },
      ],
    },
    {
      title: "Advantages of LLP",
      key: "advantages",
      list: [
        "Limited liability protection",
        "Separate legal identity",
        "Lower compliance burden compared to companies",
      ],
    },
    {
      title: "Disadvantages of LLP",
      key: "disadvantages",
      list: [
        "Difficult to raise equity funding",
        "Cannot issue shares",
      ],
    },
    {
      title: "Registration Number",
      key: "reg",
      desc: "LLPIN — a unique 7-digit identification number issued after incorporation.",
    },
    {
      title: "Registration Time",
      key: "time",
      list: ["Typically 7–10 working days"],
    },
    {
      title: "Fees",
      key: "fee",
      desc: "₹1,499 + Government fees",
    },
    {
      title: "Checklist for Registration",
      key: "checklist",
      list: [
        "Obtain Digital Signature Certificate",
        "Reserve LLP name",
        "Submit FiLLiP form",
        "Receive Certificate of Incorporation",
      ],
    },
  ];

  // Scroll spy
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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* OPTIONAL SECTIONS */}
      {/* <ServicesSubService1 /> */}
      {/* <ServicesSubMarquee /> */}

      {/* HERO IMAGE CARD */}
      {/* <ServicesImageCard
        title={companyTypes.title}
        long={companyTypes.long}
        small={companyTypes.small}
      /> */}

      {/* MAIN CONTENT */}
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
