"use client";
import Link from "next/link";
import React, { useState } from "react";
import ApplyNow from "./ApplyNow";

const servicesData = [
  {
    title: "Business Loan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageSrc: "/bussiness-loan.png",
    altText: "business-loan",
    applyLink: "/",
    readMoreLink: "/businessloan",
  },
  {
    title: "Home Loan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageSrc: "/bussiness-loan.png",
    altText: "home-loan",
    applyLink: "/",
    readMoreLink: "/homeloan",
  },
  {
    title: "Loan Against Property",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageSrc: "/bussiness-loan.png",
    altText: "loan-against-property",
    applyLink: "/",
    readMoreLink: "/loanagainstproperty",
  },
];

const Services = () => {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const toggleApply = () => {
    setIsApplyOpen(!isApplyOpen);
  };

  return (
    <div className="md:px-14 px-4 relative">
      <div className="text-4xl py-8 font-semibold">Our Services</div>
      <div className="flex flex-col gap-10">
        {servicesData.map((service, index) => (
          <div className="flex w-full md:flex-row  flex-col" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="md:w-2/6 flex items-center justify-center">
                  <img
                    src={service.imageSrc}
                    alt={service.altText}
                    className="md:w-5/6"
                  />
                </div>
                <div className="md:w-4/6 flex flex-col gap-2 justify-center p-3">
                  <div className="md:text-3xl text-2xl md:font-normal font-semibold">{service.title}</div>
                  <div className="text-sm text-gray-600">
                    {service.description}
                  </div>
                  <div className="flex gap-3 items-center">
                    <div
                      onClick={toggleApply}
                      className="bg-[#F5993C] text-white px-4 py-3 rounded-md cursor-pointer"
                    >
                      Apply Now
                    </div>
                    <Link href={service.readMoreLink} className="font-medium">
                      Read More
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex md:flex-row flex-col-reverse">
                  <div className="md:w-4/6 flex flex-col gap-2 py-3 justify-center p-3">
                    <div className="md:text-3xl text-2xl md:font-normal font-semibold">{service.title}</div>
                    <div className="text-sm text-gray-600">
                      {service.description}
                    </div>
                    <div className="flex gap-3 items-center">
                      <div
                        onClick={toggleApply}
                        className="bg-[#F5993C] text-white px-4 py-3 rounded-md cursor-pointer"
                      >
                        Apply Now
                      </div>
                      <Link href={service.readMoreLink} className="font-medium">
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-2/6 flex items-center justify-center">
                    <img
                      src={service.imageSrc}
                      alt={service.altText}
                      className="md:w-5/6"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {isApplyOpen && <ApplyNow toggleApply={toggleApply} />}
    </div>
  );
};

export default Services;
