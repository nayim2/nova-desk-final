import { useState } from "react";
import { Icon } from "@iconify/react";
import { assets } from "../../assets/assets";

export default function KYCTabsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const kycDocuments = [
    {
      title: "Sole Proprietor / Individual",
      btn: "Individual",
      documents: [
        "Aadhar Card Copy / Passport Copy",
        "PAN Card Copy",
        "One Photo / Passport Size Photo",
        "Cancelled Cheque / Passbook Front Page Copy",
      ],
    },
    {
      title: "LLP and Partnership Firms",
      btn: "Partnership",
      documents: [
        "Aadhar Card Copy / Passport Copy (All Partners)",
        "PAN Card Copy (All Partners)",
        "One Photo / Passport Size Photo (All Partners)",
        "Cancelled Cheque / Passbook Front Page Copy",
        "PAN Card Copy of the Business",
        "GST Certificate (if applicable)",
        "COI (Certificate of Incorporation) (if applicable)",
      ],
    },
    {
      title: "Company (Public and Private)",
      btn: "Company",
      documents: [
        "Aadhar Card Copy / Passport Copy (All Directors)",
        "PAN Card Copy (All Directors)",
        "One Photo / Passport Size Photo (All Directors)",
        "Cancelled Cheque / Passbook Front Page Copy",
        "PAN Card Copy of the Business",
        "GST Certificate (if applicable)",
        "COI (Certificate of Incorporation) (if applicable)",
      ],
    },
  ];

  return (
    <section className="w-full max-h-[1450px] h-auto bg-white tabs-section max-md:px-4 max-md:py-8">
      <div className="max-w-[1440px] h-full mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-y-6 md:gap-x-10">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 h-full md:max-h-[80%] flex flex-col items-start gap-y-8 text-secondary">
          
          {/* HEADING */}
          <h4 className="text-4xl font-medium leading-12">
            Your Paperwork, Made Easy
          </h4>

          {/* TABS */}
          <div className="w-full flex items-center gap-x-4">
            {kycDocuments.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`tab-btn ${
                  currentIndex === index ? "tab-btn-active" : ""
                }`}
              >
                {item.btn}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          {kycDocuments.map(
            (item, index) =>
              currentIndex === index && (
                <div
                  key={index}
                  className="w-full bg-primary/10 border border-primary/20 p-5 rounded-md"
                >
                  <h5 className="lg:text-2xl lg:text-primary lg:font-semibold">
                    {item.title}
                  </h5>

                  <ul className="mt-4 space-y-4 list-disc pl-6 marker:text-primary">
                    {item.documents.map((doc, key) => (
                      <li key={key}>{doc}</li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 h-[250px] md:h-[580px] relative flex items-center justify-center overflow-hidden">
          <div className="w-full max-md:h-full md:h-[80%] relative rounded-xl overflow-hidden">
            <img
              src={assets.assistant2}
              alt="KYC Assistance"
              className="w-full h-full object-cover rounded-xl tags_area"
              loading="lazy"
            />

            {/* ARROW OVERLAY */}
            <span className="size-20 md:size-44 pt-5 pl-5 bg-white absolute bottom-0 right-0 rounded-tl-xl flex">
              <span className="size-full bg-primary rounded-xl flex items-center justify-center">
                <Icon
                  icon="solar:arrow-right-up-linear"
                  className="text-3xl lg:text-8xl text-white"
                />
              </span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
