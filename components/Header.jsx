"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  ChevronDown,
  Headphones,
  BookMarked,
  Pin,
} from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [calculatorIsOpen, setCalculatorIsOpen] = useState(false);
  const [servicesIsOpen, setServicesIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const calculatorDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleCalculator = () => {
    setCalculatorIsOpen(!calculatorIsOpen);
    setServicesIsOpen(false);
  };

  const toggleServices = () => {
    setServicesIsOpen(!servicesIsOpen);
    setCalculatorIsOpen(false);
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
    <div className="md:px-10 px-5 py-2 flex flex-col gap-2 bg-[#F2F1F0] fixed top-0 w-full z-10 shadow-md">
      <div className="flex justify-between text-sm">
        <div className="flex gap-1 hover:bg-[#ffd4aa] py-1 px-2 rounded-full cursor-pointer">
          <Phone color="#F5993C" size={20} />{" "}
          <span className="text-sm"> +91 9818044039</span>
        </div>

        <div className="flex gap-4 items-center">
          <div className="md:flex hidden gap-1 hover:bg-[#ffd4aa] py-1 px-2 rounded-full cursor-pointer">
            <Pin color="#F5993C" size={20} className="" />
            <span>Locate Us</span>
          </div>
          <div className="flex gap-1 hover:bg-[#ffd4aa] py-1 px-2 rounded-full cursor-pointer">
            <Mail color="#F5993C" size={20} />{" "}
            <span> kmalik0907@gmail.com </span>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-200 rounded-full"></div>

      <div className="flex justify-between items-center md:flex-row">
        <Link href={"/"} className="flex gap-1 font-semibold text-xl">
          <span className="text-[#F5993C]">SE</span>
          <span>Finance</span>
        </Link>
        {!isTabletOrMobile && (
          <div className="md:flex hidden gap-14">
            <Link href="/">Home</Link>
            <div
              className="flex items-center cursor-pointer relative"
              onClick={toggleCalculator}
            >
              <span>Calculator</span>{" "}
              <ChevronDown strokeWidth={1.5} size={20} />{" "}
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
        )}
        {!isTabletOrMobile && (
          <div className="flex gap-3 items-center">
            <Link href={"/"}>Sign In</Link>
            <Link
              href={"/"}
              className="bg-[#F5993C] text-white px-4 py-2 rounded-full"
            >
              Sign Up
            </Link>
          </div>
        )}
          {isTabletOrMobile && (
        <div>
          <div onClick={toggleMobileMenu}>
            {
              mobileMenu ? <X size={20} /> : <Menu size={20} />
            }
          </div>
          {mobileMenu && (
            <div className="absolute top-[90px] left-0 w-full bg-white z-20 shadow-lg">
              <div className="p-4">
                <Link href="/" className="block py-2 px-4 hover:bg-gray-100">
                  Home
                </Link>
                <div className="relative">
                  <div
                    className="flex justify-between items-center py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    onClick={toggleCalculator}
                  >
                    <span>Calculator</span>
                    <ChevronDown strokeWidth={1.5} size={20} />
                  </div>
                  {calculatorIsOpen && (
                    <div className="bg-white shadow-md">
                      {CalculatorOptions.map((option) => (
                        <Link href={option.link} key={option.name}>
                          <div className="py-2 px-4 hover:bg-gray-100">
                            {option.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <div
                    className="flex justify-between items-center py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    onClick={toggleServices}
                  >
                    <span>Services</span>
                    <ChevronDown strokeWidth={1.5} size={20} />
                  </div>
                  {servicesIsOpen && (
                    <div className="bg-white shadow-md">
                      {ServicesOptions.map((option) => (
                        <Link href={option.link} key={option.name}>
                          <div className="py-2 px-4 hover:bg-gray-100">
                            {option.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link href="/" className="block py-2 px-4 hover:bg-gray-100">
                  Contact Us
                </Link>
                <Link href="/" className="block py-2 px-4 hover:bg-gray-100">
                  Sign In
                </Link>
                <Link
                  href="/"
                  className="block py-2 px-4 bg-[#F5993C] text-white rounded-full text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
      </div>
    
    </div>
  );
};

export default Header;
