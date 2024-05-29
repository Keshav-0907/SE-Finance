import EmiCalc from '@/components/EmiCalc'
import Footer from '@/components/Footer'
import React from 'react'

const EmiCalculator = () => {
    return (
        <><div className='py-24 relative'>
            <div className='flex flex-col items-center py-10 md:px-2 px-5'>
                <div className='text-4xl font-semibold'>
                    Loan EMI Calculator
                </div>
                <div className='md:text-base text-sm'>
                    Our user-friendly calculator will help determine your monthly EMIs and plan the budget at your convenience
                </div>

            </div>
            <div className='flex justify-center items-center md:px-10 px-4'>
                <EmiCalc />
            </div>
        </div><Footer /></>
    )
}

export default EmiCalculator