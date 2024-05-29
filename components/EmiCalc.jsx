"use client";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmiCalc = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(15);
  const [loanTenure, setLoanTenure] = useState(60);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterestPayable, setTotalInterestPayable] = useState(0);

  function numberWithCommas(x) {
    return x.toString().split(".")[0].length > 3
      ? x
          .toString()
          .substring(0, x.toString().split(".")[0].length - 3)
          .replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
          "," +
          x.toString().substring(x.toString().split(".")[0].length - 3)
      : x.toString();
  }

  useEffect(() => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfPayments = loanTenure;

    const EMI =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setMonthlyEMI(EMI);

    const totalPayable = EMI * numberOfPayments;
    const totalInterest = totalPayable - loanAmount;
    setTotalInterestPayable(totalInterest);
  }, [loanAmount, interestRate, loanTenure]);

  console.log({
    loanAmount,
    interestRate,
    loanTenure,
    monthlyEMI,
    totalInterestPayable,
  });

  const data = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [
      {
        label: "Loan Breakdown",
        data: [loanAmount, totalInterestPayable],
        backgroundColor: ["#98a7b1", "#F5993C"],
        hoverBackgroundColor: ["#98a7b1", "#F5993C"],
      },
    ],
  };

  return (
    <div className="bg-[#F2F1F0] h-fit w-fit flex shadow-lg p-10 md:flex-row flex-col md:gap-0 gap-10">
      <div className="flex flex-col md:gap-0 gap-5 md:w-1/2 md:px-10 px-3 justify-around">
        <div className="flex gap-2 flex-col">
          <div className="flex justify-between gap-2 md:flex-row flex-col">
            <div className="md:text-lg font-semibold">
              1. Required Loan Amount
            </div>
            <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-2 py-2">
              <span className="text-gray-700">₹</span>
              <input
                type="number"
                className="bg-gray-50 text-sm focus:outline-none w-full pl-2.5"
                placeholder=""
                required
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </div>
          </div>
          <div>
            <input
              type="range"
              value={loanAmount}
              min={100000}
              max={10000000}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full range-yellow"
            />
          </div>
          <div className="flex justify-between">
            <div>Min 1L</div>
            <div>Max 1Cr</div>
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">2. Interest Rate</div>
            <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-2 py-2">
              <input
                type="number"
                className="bg-gray-50 text-sm focus:outline-none w-full pl-2.5"
                placeholder=""
                onChange={(e) => setInterestRate(Number(e.target.value))}
                value={interestRate}
                required
              />
              <span className="text-gray-700">%</span>
            </div>
          </div>
          <div>
            <input
              type="range"
              onChange={(e) => setInterestRate(Number(e.target.value))}
              min={15}
              max={30}
              value={interestRate}
              className="w-full range-yellow"
            />
          </div>
          <div className="flex justify-between">
            <div>Min 15%</div>
            <div>Max 30%</div>
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">3. Loan Tenure</div>
            <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-2 py-2">
              <input
                type="number"
                className="bg-gray-50 text-sm focus:outline-none w-full pl-2.5"
                placeholder=""
                required
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
              />
            </div>
          </div>
          <div>
            <input
              type="range"
              onChange={(e) => setLoanTenure(Number(e.target.value))}
              min={12}
              max={60}
              value={loanTenure}
              className="w-full range-yellow"
            />
          </div>
          <div className="flex justify-between">
            <div>Min 12 Months</div>
            <div>Max 60 Months</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 md:w-1/2">
        <div className="">
          <Doughnut data={data} />
        </div>
        
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-2">
          <thead className="text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Monthly EMI
              </th>
              <th scope="col" className="px-6 py-3">
                Total Payable
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4">
                {numberWithCommas(monthlyEMI.toFixed(2))}
              </td>
              <td className="px-6 py-4">
                {numberWithCommas(totalInterestPayable.toFixed(2))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmiCalc;
