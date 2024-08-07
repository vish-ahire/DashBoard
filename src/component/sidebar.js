import React, { useState } from 'react'
import { IoHome, IoBagCheckOutline, RiBarChartBoxLine, CiWallet, BsClipboard2Check } from '../asset/icon'
import Logo from '../asset/image_with_dark_background-removebg-preview.png'


export default function Sidebar() {
    const [active, setActive] = useState("Home")
    return (
        <div className=" flex flex-col items-center ">
            <div>
                <img src={Logo}
                    alt='logo'
                    className=' bg-transparent w-12 xl:bg-transparent'
                />
            </div>
            <div className='space-y-8 mt-8 space '>
                <IoHome onClick={() => setActive("Home")} className={active === "Home" ? "bg-blue-600" : ""} />
                <RiBarChartBoxLine onClick={() => setActive("Bar")} className={active === "Bar" ? "bg-blue-600" : ""} />
                <CiWallet onClick={() => setActive("Wallet")} className={active === "Wallet" ? "bg-blue-600" : ""} />
                <IoBagCheckOutline onClick={() => setActive("Bag")} className={active === "Bag" ? "bg-blue-600" : ""} />
                <BsClipboard2Check onClick={() => setActive("Clip")} className={active === "Clip" ? "bg-blue-600" : ""} />
            </div>
        </div>

    )
}

