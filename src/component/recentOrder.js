import { orders } from "../asset/data";

export default function RecentOrders() {
    return (
        <div className=" bg-slate-900 p-3 rounded-md mb-5">
            <p className="mb-2 font-bold text-lg">Recent Orders</p>
            <table className="w-full text-center">
                <thead className="border-b-white">
                    <tr className=" text-sm">
                        <th className="text-start">Customer</th>
                        <th>Order No.</th>
                        <th>Amount</th>
                        <th >Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (

                        <tr key={index} className=" border-t text-xs border-gray-600" >
                            <td className="flex py-1 items-end">
                                <span>{order.profileIcon}</span>
                                <span>{order.customer}</span>
                            </td>
                            <td>{order.orderNo}</td>
                            <td>{order.amount}</td>
                            <td>
                                {order.status === 'Delivered' ?
                                    <div className=" w-20 m-auto  bg-opacity-55 rounded-3xl  text-white bg-green-400">{order.status}</div> :
                                    <div className=" w-20 m-auto  bg-opacity-55 rounded-3xl  text-White bg-red-400">{order.status}</div>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
