import React from 'react'
import { TfiTarget } from "react-icons/tfi";
import { FaHamburger } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";


function Goal() {
    const data = [
        { theme: " bg-red-600", icon: <TfiTarget size={24} />, type: "Goals" },
        { theme: "bg-orange-600", icon: <FaHamburger size={24} />, type: "Popular Dishes" },
        { theme: "bg-green-600", icon: <BiSolidDish size={24} />, type: "Menu" },
    ]
    return (
        <div className='ml-5 bg-slate-900 rounded-md py-6  mb-5   '>
            {data.map(e => (
                <div className='flex justify-between items-center ' key={e.type}>
                    <div className='flex p-2 items-center '>
                        <span className={e.theme + " ml-3 rounded-full bg-opacity-55 p-2"}>{e.icon}</span>
                        <p className='text-lg pl-5'>{e.type}</p>
                    </div>
                    {/* <span className='flex items-center justify-center  p-3 w-2 h-2 mr-8  bg-gray-200 bg-opacity-75 rounded-full'>{`>`}</span> */}
                    <div className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 bg-opacity-75 mr-8'>
                        <span className='text-center'>{'>'}</span>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Goal