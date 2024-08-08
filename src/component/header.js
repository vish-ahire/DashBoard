import React from 'react'
import { FaRegUserCircle, IoIosNotificationsOutline, CiSettings, CiMail } from '../asset/icon'

export default function Header() {
    return (
        <header className="sticky top-0 p-3 bg-gray-950 z-10 rounded-e-2xl flex justify-between items-center  ">

            <input type="text" placeholder="Search" className=' border-none mx-2 rounded-md text-black' />
            <div className=" flex  space-x-8 items-center">
                <div className='rounded-full bg-gray-600 p-1' ><CiMail size={24} /></div>
                <div className='rounded-full bg-gray-600 p-1'><CiSettings size={24} /></div>
                <div className='rounded-full bg-gray-600 p-1' >< IoIosNotificationsOutline size={24} /></div>
                <div ><FaRegUserCircle size={30} /></div>
            </div>

        </header>
    );
}
