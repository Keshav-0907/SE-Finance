"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { ChevronRight, LandPlot, Home, Handshake } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="md:py-16 pt-14 bg-[#F2F1F0] relative w-full">
      <div className="flex w-full md:px-6 px-4 md:flex-row flex-col">
        <div className="md:w-1/2 w-full flex justify-center md:px-10 px-4 flex-col">
          <div className="md:text-6xl text-3xl font-bold text-start">
            <Typewriter
              options={{
                strings: ["Fast ⚡", "Easy ✅", "Funded 💸"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
              }}
            />
            Loans Made Simple.
          </div>
          <div className="text-[#909090] max-w-lg md:text-base text-xs">
            Turn your plans into reality. We offer home loans, LAPs, and
            mortgages with competitive rates and a smooth process.
          </div>
        </div>
        <div className="w-1/2 md:flex hidden">
          <img src="/hero.png" alt="hero" className="" />
        </div>
        <div className="md:hidden flex p-4">
          <div className="bg-[#F5993C] text-white px-4 py-2 rounded-full">
            Apply Now
          </div>
          <div className="px-4 py-2 rounded-full flex items-center justify-center">
            <span>Know More</span> <ChevronRight size={20} />{" "}
          </div>
        </div>
        <div className="md:hidden flex flex-wrap gap-3 p-4">
          <Link href={'/homeloan'} className="bg-[#f7d4b2] px-3 py-2 rounded-full flex gap-2 border-[1px] border-[#F5993C]">
            {" "}
            <Home strokeWidth={1.3} /> <span>Home Loan</span>
          </Link>
          <Link href={'/loanagainstproperty'} className="bg-[#f7d4b2] px-3 py-2 rounded-full flex gap-2 border-[1px] border-[#F5993C]">
            {" "}
            <LandPlot strokeWidth={1.3} /> <span> Loan Against Property</span>{" "}
          </Link>
          <Link href={'/businessloan'} className="bg-[#f7d4b2] px-3 py-2 rounded-full flex gap-2 border-[1px] border-[#F5993C]">
            <Handshake strokeWidth={1.3} /> <span>Business Loan</span>
          </Link>
        </div>
      </div>
      <div className="md:flex hidden justify-center absolute w-full md:bottom-7 py-10">
        <div className="bg-white px-3 py-5 rounded-lg w-8/12 shadow-md">
          <div className="flex gap-4 md:flex-row flex-col">
            <input
              type="text"
              placeholder="Enter your name"
              className="border-[1px] border-gray-200 p-2 text-sm rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="border-[1px] border-gray-200 p-2 text-sm rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Enter your Pin Code"
              className="border-[1px] border-gray-200 p-2 text-sm rounded-md focus:outline-none"
            />
            <select className="border-[1px] border-gray-200 bg-white p-2 text-sm rounded-md focus:outline-none">
              <option value="" disabled>
                Select Loan Type
              </option>
              <option value="home-loan">Home Loan</option>
              <option value="business-loan">Business Loan</option>
              <option value="loan-against-property">
                Loan Against Property
              </option>
              <option value="other">Other</option>
            </select>

            <button className="bg-[#F5993C] text-white px-4 py-2 rounded-md">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
