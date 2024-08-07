import { BsBagCheckFill, BsBagXFill, TbBasketPlus, FaMoneyBillTransfer } from '../asset/icon'
export const orders = [
    {
        profileIcon: <img src="https://robohash.org/assdfghjkhgf.png" alt=' ' width="20" height="20" />
        , customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered'
    },
    {
        profileIcon: <img src="https://robohash.org/${Math.random().toString(34).substring(7)}.png" alt=' ' width="20" height="20" />
        , customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02', status: 'Delivered'
    },
    {
        profileIcon: <img src="https://robohash.org/asdfg123.png" alt=' ' width="20" height="20" />
        , customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled'
    },
    {
        profileIcon: <img src="https://robohash.org/adasd1234567890.png" width="20" alt=' ' height="20" />
        , customer: 'Kristin Watson', orderNo: '20965732', amount: '$60.00', status: 'Pending'
    },
    {
        profileIcon: <img src="https://robohash.org/${Math.random().toString(18).substring(7)}.png" alt=' ' width="20" height="20" />
        , customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered'
    },
    {
        profileIcon: <img src="https://robohash.org/${Math.random().toString(36)}.png" alt=' ' width="20" height="20" />
        , customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered'
    },
];

export const feedback = [
    { name: 'Jenny Wilson', rating: 5, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'Dianne Russell', rating: 3, comment: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { name: 'Devon Lane', rating: 5, comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' },
];

export const dataObj = {
    data: [
        { lable: '5', profit: 5000 },
        { lable: '9', profit: 3020 },
        { lable: '11', profit: 8000 },
        { lable: '13', profit: 12540 },
        { lable: '15', profit: 9500 },
        { lable: '17', profit: 2000 },
        { lable: '19', profit: 4000 },
        { lable: '21', profit: 200 },
        { lable: '23', profit: 4000 },
        { lable: '25', profit: 5000 },
        { lable: '27', profit: 8000 },
    ],
    series: [{ type: 'bar', xKey: 'lable', yKey: 'profit' }]
}


export const data = [
    { icon: <TbBasketPlus size={36} />, theme: "bg-blue-900 ", title: "Total Orders", value: "75" },
    { icon: <BsBagCheckFill size={36} />, theme: "bg-green-500 ", title: "Total Delivered", value: "70" },
    { icon: <BsBagXFill size={36} />, theme: "bg-orange-500 ", title: "Total Cancelled", value: "05" },
    { icon: < FaMoneyBillTransfer size={36} />, theme: "bg-pink-400 ", title: "Total Revenue", value: "$12k" }]
