import EmiCalc from '@/components/EmiCalc'
import React from 'react'

const EmiCalculator = () => {
    return (
        <div className='py-24'>
            <div className='flex flex-col items-center py-10'>
                <div className='text-4xl font-semibold'>
                    Loan EMI Calculator
                </div>
                <div>
                    Our user-friendly calculator will help determine your monthly EMIs and plan the budget at your convenience
                </div>
            </div>
            <div className='flex justify-center items-center h-[70vh] px-10'>
                <EmiCalc/>
            </div>
        </div>
    )
}

export default EmiCalculator