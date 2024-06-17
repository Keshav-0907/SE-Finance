import React from "react";
import { CircleX } from "lucide-react";
import { useState } from "react";

const ApplyNow = ({ toggleApply }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loanType, setLoanType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log({name, phone, loanType, message});
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white text-black md:px-8 px-2 py-6 rounded-lg md:w-1/2 w-2/3 h-fit flex flex-col items-center justify-center">
        <button
          className="absolute top-2 right-2 text-black"
          onClick={toggleApply}
        >
          <CircleX />
        </button>
        <div className="text-center py-5">
          <div className="md:text-4xl text-2xl font-semibold">Apply for a Loan Now</div>
          <div className="text-sm text-gray-600">
            Our team will contact you within 3 hours
          </div>
        </div>
        <form className="flex flex-col gap-4 w-3/4">
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            className="md:p-2 p-1 rounded-md border border-gray-300"
          />
          <input
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            className="md:p-2 p-1 rounded-md border border-gray-300"
          />
          <select
            className="md:p-2 p-1 rounded-md border border-gray-300"
            defaultValue=""
            onChange={(e) => setLoanType(e.target.value)}
          >
            <option value="" disabled>
              Select Loan Type
            </option>
            <option value="home-loan">Home Loan</option>
            <option value="business-loan">Business Loan</option>
            <option value="loan-against-property">Loan Against Property</option>
            <option value="other">Other</option>
          </select>
          <textarea
            placeholder="Any thing you want us to know?"
            className="md:p-2 p-1 text-sm rounded-md border border-gray-300"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-[#F5993C] text-white md:px-4 px-3 md:py-3 py-2 rounded-md cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
