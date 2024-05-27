"use client";
import React, { useEffect, useRef, useState } from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [calculatorIsOpen, setCalculatorIsOpen] = useState(false);
  const [servicesIsOpen, setServicesIsOpen] = useState(false);

  const calculatorDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  const toggleCalculator = () => {
    setCalculatorIsOpen(!calculatorIsOpen);
    setServicesIsOpen(false); // Close services dropdown when opening calculator
  };

  const toggleServices = () => {
    setServicesIsOpen(!servicesIsOpen);
    setCalculatorIsOpen(false); // Close calculator dropdown when opening services
  };

  const handleClickOutsideCalculator = (event) => {
    if (
      calculatorDropdownRef.current &&
      !calculatorDropdownRef.current.contains(event.target)
    ) {
      setCalculatorIsOpen(false);
    }
  };

  const handleClickOutsideServices = (event) => {
    if (
      servicesDropdownRef.current &&
      !servicesDropdownRef.current.contains(event.target)
    ) {
      setServicesIsOpen(false);
    }
  };

  useEffect(() => {
    if (calculatorIsOpen) {
      document.addEventListener("mousedown", handleClickOutsideCalculator);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideCalculator);
    }

    if (servicesIsOpen) {
      document.addEventListener("mousedown", handleClickOutsideServices);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideServices);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCalculator);
      document.removeEventListener("mousedown", handleClickOutsideServices);
    };
  }, [calculatorIsOpen, servicesIsOpen]);

  const CalculatorOptions = [
    {
      name: "EMI Calculator",
      link: "/emicalculator",
    },
    {
      name: "TBD",
      link: "/",
    },
  ];

  const ServicesOptions = [
    {
      name: "Business Loan",
      link: "/businessloan",
    },
    {
      name: "Home Loan",
      link: "/homeloan",
    },
    {
      name: "Loan Against Property",
      link: "/loanagainstproperty",
    },
  ];

  return (
    <div className="px-10 py-2 flex flex-col gap-2 bg-[#F2F1F0] fixed top-0 w-full z-10 shadow-md">
      <div className="flex justify-between text-sm">
        <div className="flex gap-2 items-center">
          <Phone color="#F5993C" size={20} />{" "}
          <span className="text-sm"> +91 9818044039</span>
        </div>

        <div className="flex gap-2 items-center">
          <Mail color="#F5993C" size={20} /> <span> kmalik0907@gmail.com </span>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-200 rounded-full"></div>

      <div className="flex justify-between items-center">
        <Link href={'/'} className="flex gap-1 font-semibold text-xl">
          <span className="text-[#F5993C]">SE</span>
          <span>Finance</span>
        </Link>
        <div className="md:flex hidden gap-14">
          <Link href="/">Home</Link>
          <div
            className="flex items-center cursor-pointer relative"
            onClick={toggleCalculator}
          >
            <span>Calculator</span> <ChevronDown strokeWidth={1.5} size={20} />{" "}
            <div className="relative" ref={calculatorDropdownRef}>
              {calculatorIsOpen && (
                <div className="absolute z-10 bg-white p-2 rounded-md shadow-md top-5 w-fit right-0">
                  {CalculatorOptions.map((option) => (
                    <Link href={option.link} key={option.name}>
                      <div className="p-2 cursor-pointer hover:bg-gray-100 rounded-md w-full truncate">
                        <span className="block whitespace-nowrap overflow-hidden text-ellipsis w-full">
                          {option.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div
            className="flex items-center cursor-pointer relative"
            onClick={toggleServices}
          >
            <span>Services</span> <ChevronDown strokeWidth={1.5} size={20} />{" "}
            <div className="relative" ref={servicesDropdownRef}>
              {servicesIsOpen && (
                <div className="absolute z-10 bg-white p-2 rounded-md shadow-md top-5 w-fit right-0">
                  {ServicesOptions.map((option) => (
                    <Link href={option.link} key={option.name}>
                      <div className="p-2 cursor-pointer hover:bg-gray-100 rounded-md w-full truncate">
                        <span className="block whitespace-nowrap overflow-hidden text-ellipsis w-full">
                          {option.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Link href="/">Contact Us</Link>
        </div>
        <div className="flex gap-3 items-center">
          <Link href={"/"}>Sign In</Link>
          <Link
            href={"/"}
            className="bg-[#F5993C] text-white px-4 py-2 rounded-full"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
