import React from 'react'
import Card from './card';
import Activity from './activity';
import RecentOrders from './recentOrder';
import CustomerFeedback from './customerFeedback';
import Goal from './goal';

import { data } from '../asset/data';
export default function Dashboard() {
    
    return (
        <div className=''>
            <div className=" px-5 bg-slate-800 ">
                <p className='py-2 mb-1 font-bold text-2xl'>Dashboard</p>
                <div className='flex '>
                    {/* left */}
                    <div className='basis-3/5  bg-slate-800'>
                        <div className="flex justify-between shrink-0 flex-row md:flex flex-wrap">
                            {data.map((e, index) =>
                                (<Card key={e.title} index={index} icon={e.icon} theme={e.theme} title={e.title} value={e.value} />)
                            )}
                        </div>
                        <div>
                            <Activity />
                            <RecentOrders />
                        </div>
                    </div>

                    {/* right */}
                    <div className="basis-2/5 bg-slate-800">
                        <div className='flex  justify-between mx-5 p-5 mb-5 rounded-lg  text-center bg-slate-900'>
                            <div className='flex flex-col justify-between'>
                                <h3 className='flex  '>Net Profit</h3>
                                <div className="flex items-center text-4xl font-extrabold">
                                    <span>$&nbsp; </span>
                                    <p>6759.25</p>
                                </div>
                                {/* <p className='text-4xl  font-extrabold'>$ 6759.25</p> */}
                                <p className="flex font-extrabold pt-1 text-xs text-green-600">3%</p>
                            </div>
                            {/* progress bar */}
                            <div>
                                <div class="relative w-24 h-24">
                                    <svg className="absolute inset-0 w-full h-full rounded-full" viewBox="0 0 100 100">
                                        <circle className="stroke-gray-300" cx="50" cy="50" r="40" stroke-width="10" fill="none" />
                                        <circle className="stroke-blue-500" cx="50" cy="50" r="40" stroke-width="10" fill="none"
                                            stroke-linecap="round" stroke-dasharray="282.7433388230814" stroke-dashoffset="calc(282.7433388230814 - (282.7433388230814 * 70) / 100)" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
                                        <p>70%</p>
                                        <span className=' text-micro'>Goal Completed</span>
                                    </div>
                                </div>
                                <p className='text-nano mt-1'>*This value has been rounded off.</p>
                            </div>

                        </div>

                        <Goal />
                        <CustomerFeedback />
                    </div>
                </div>
            </div>
        </div >
    );

}
