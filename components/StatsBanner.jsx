'use client'
import React from 'react'
import CountUp from 'react-countup'

const StatsBanner = () => {
  return (
    <div className='py-10'>
        <div className='bg-[#F5993C] text-white py-6'>
            <div className="flex justify-center gap-20">
                <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold"> <CountUp end={500} duration={5}/> + </div>
                    <div className="text-sm ">Happy Clients</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold"> <CountUp end={10} duration={5}/> + </div>
                    <div className="text-sm">Years of Experiance</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold"> <CountUp end={5} duration={5}/> + </div>
                    <div className="text-sm ">Awards</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatsBanner