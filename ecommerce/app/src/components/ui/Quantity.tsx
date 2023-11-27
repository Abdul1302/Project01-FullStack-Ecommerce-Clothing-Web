'use client'
import { Import } from 'lucide-react';
import React, { useState } from 'react'



const Quantity = () => {

    const [num, setnum] = useState(1);

    return (
        <div className='flex gap-x-3  items-center' >
            {/*Minus */}
            <div className='border h-8 w-8  text-white text-2xl bg-black hover: rounded-full hover:scale-105 cursor-pointer flex justify-center items-center'
                onClick={() => {
                     
                    setnum(num<=1 ? 1: num - 1);
                }}>
                -
            </div>
            {/*Number*/}
            <span className='text-lg'>
                {num}
            </span>
            {/*Plus*/}
            <div className='border h-8 w-8  text-white text-2xl bg-black hover: rounded-full hover:scale-105 cursor-pointer flex justify-center items-center'
                onClick={() => {

                    setnum(num + 1);
                }}>
                +
            </div>

        </div>

    )
}

export default Quantity