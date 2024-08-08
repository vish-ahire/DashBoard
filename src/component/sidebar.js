import React, { useState } from 'react'
import { IoHome, IoBagCheckOutline, RiBarChartBoxLine, CiWallet, BsClipboard2Check } from '../asset/icon'
import Logo from '../asset/image_with_dark_background-removebg-preview.png'


export default function Sidebar() {
  const [active, setActive] = useState("Home")

  const NavigationItem = ({ icon, onClick, active }) => {
    return (
      <div className="flex items-center justify-center space-y-8 mt-8">
        <button
          onClick={onClick}
          className={`flex items-center justify-center w-7 h-7 rounded-full hover:shadow-blue-500 ${active ? 'bg-blue-600' : 'bg-transparent'
            }`}
        >
          {icon}
        </button>
      </div>
    );
  };
  return (
    <div className="sticky top-0 h-screen flex flex-col w-1/12 items-center md:w-16">
      <div>
        <img src={Logo}
          alt='logo'
          className=' bg-transparent w-12 xl:bg-transparent'
        />
      </div>
      <div className="space-y-8">
        <NavigationItem icon={<IoHome size={24} />} onClick={() => setActive('Home')} active={active === 'Home'} />
        <NavigationItem icon={<RiBarChartBoxLine size={24} />} onClick={() => setActive('Bar')} active={active === 'Bar'} />
        <NavigationItem icon={<CiWallet size={24} />} onClick={() => setActive('Wallet')} active={active === 'Wallet'} />
        <NavigationItem icon={<IoBagCheckOutline size={24} />} onClick={() => setActive('Bag')} active={active === 'Bag'} />
        <NavigationItem icon={<BsClipboard2Check size={24} />} onClick={() => setActive('Clip')} active={active === 'Clip'} />
      </div>
    </div>
  )
}

