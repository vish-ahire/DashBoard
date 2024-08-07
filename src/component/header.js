import React from 'react'
import {FaRegUserCircle, IoIosNotificationsOutline, CiSettings, CiMail} from '../asset/icon'

export default function Header() {
    return (
        <header className="flex sticky justify-between items-center m-3 ">
            
        <input type="text" placeholder="Search"  className='border-none mx-2 rounded-md text-black'/>
            <div className=" flex  space-x-8">
                <div ><CiMail size={24} /></div>
                <div ><CiSettings size={24} /></div>
                <div >< IoIosNotificationsOutline size={24} /></div>
                <div ><FaRegUserCircle size={24} /></div>
            </div>
        
        </header>
    );
}
