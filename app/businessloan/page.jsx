import Footer from "@/components/Footer";
import React from "react";
const businessLoanData = [
  {
    title: "Loan Amount",
    description: "Up to 5 Crores",
  },
  {
    title: "Loan Tenure",
    description: "Up to 30 years",
  },
  {
    title: "Floating Interest Rate",
    description: "8.75% - 9.25%",
  },
  {
    title: "Fixed Interest Rate",
    description: "14%",
  },
  {
    title: "Processing Fees",
    description: "Upto 1% of the loan amount",
  },
];

const BusinessLoan = () => {
  return (
    <><div className="py-28 px-10">
      <div className="text-4xl font-semibold py-4">
        <div>Business Loan</div>
        <div className="bg-[#F5993C] h-1 w-full"></div>
      </div>
      <div className="text-sm py-2">
        Kotak Mahindra Bank offers a range of business loans in India to help
        individuals purchase their dream business. As a significant investment, we
        understand the importance of making the right decision, which is why we
        provide comprehensive information on business finance, including interest
        rates, eligibility criteria, and customisable loan offerings. Whether
        you are a first-time businessbuyer, upgrading to your dream business or planning
        to reduce your Housing Loan EMI by shifting, we have the perfect
        solution to suit your needs. Our website offers helpful resources such
        as business loan calculators and FAQs to guide you towards making an
        informed decision. Take the first step towards owning your dream business in
        India today by applying for housing finance with Kotak. You can apply
        online for a Kotak business Loan via our website, Mobile Banking App, or by
        simply walking into your nearest Kotak Mahindra Bank branch. Via our
        online process, you can enjoy ease and convenience of a quick loan
        processing and get your business Loan sanction letter within 10 minutes.
      </div>
      <div className="py-2">
        <div className="text-3xl font-semibold">Business Loan Details</div>
        <div className="relative overflow-x-auto py-8 md:px-10 px-0">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-gray-700 uppercase bg-gray-200 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
              </tr>
            </thead>
            <tbody>
              {businessLoanData.map((product, index) => (
                <tr
                  key={index}
                  className={`bg-white border-b text-black  ${index % 2 === 0 ? "" : "bg-gray-50 "}`}
                >
                  <td className="px-6 py-4">{product.title}</td>
                  <td className="px-6 py-4">{product.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="text-3xl font-semibold">
          Features and Benefits of a Business Loan
        </div>
        <div className="flex justify-between py-10 md:px-10 px-0 md:flex-row flex-col gap-8">
          <div className="flex md:justify-center md:gap-0 gap-4 items-center md:flex-col">
            <img
              src="https://www.kotak.com/content/dam/Kotak/svg-icons/loans/personal-loan/functionality-offers.svg"
              alt="err" />
            <div className="flex flex-col md:text-center">
              <span className="text-[#F5993C] font-semibold">
                {" "}
                Attractive Interest Rate{" "}
              </span>
              <span className="text-sm">
                {" "}
                Rates linked to RBI's repo rates{" "}
              </span>
            </div>
          </div>
          <div className="flex md:justify-center md:gap-0 gap-4 items-center md:flex-col">
            <img
              src="https://www.kotak.com/content/dam/Kotak/svg-icons/minimal-document.svg"
              alt="err"
              className="max-w-20" />
            <div className="flex flex-col md:text-center">
              <span className="text-[#F5993C] font-semibold">
                {" "}
                Minimal Documentation{" "}
              </span>
              <span className="text-sm">
                {" "}
                Hassle free and quick documention{" "}
              </span>
            </div>
          </div>
          <div className="flex md:justify-center md:gap-0 gap-4 items-center md:flex-col">
            <img
              src="https://www.kotak.com/content/dam/Kotak/svg-icons/minimal-document.svg"
              alt="err"
              className="max-w-20" />
            <div className="flex flex-col md:text-center">
              <span className="text-[#F5993C] font-semibold">
                {" "}
                Minimal Documentation{" "}
              </span>
              <span className="text-sm">
                {" "}
                Hassle free and quick documention{" "}
              </span>
            </div>
          </div>
          <div className="flex md:justify-center md:gap-0 gap-4 items-center md:flex-col">
            <img
              src="https://www.kotak.com/content/dam/Kotak/svg-icons/loans/personal-loan/functionality-offers.svg"
              alt="err" />
            <div className="flex flex-col md:text-center">
              <span className="text-[#F5993C] font-semibold">
                {" "}
                Attractive Interest Rate{" "}
              </span>
              <span className="text-sm">
                {" "}
                Rates linked to RBI's repo rates{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div><Footer /></>
  );
};

export default BusinessLoan;
