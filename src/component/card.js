
export default function Card({ theme, icon, title, value, index }) {
    const percent = index % 2 === 0 ? "text-red-600 " : "text-green-600";

    return (
        <div className={`p-6 mb-5 rounded-lg bg-slate-900 hover:shadow-2xl w-40 hover:shadow-blue-900`}>
            <div className="flex flex-col">
                <div className="flex ">
                <p className={theme + "flex justify-start mb-3 p-1 mr-1 opacity-80 rounded-md"}>{icon}</p>
                </div>
                <p className="text-xs">{title}</p>
            </div>
            <div className="flex mt-1 justify-between">
                <p className="font-extrabold ">{value}</p>
                <span className={"pt-1 text-xs font-extrabold " + ` ${percent } `}>3%</span>
            </div>
        </div>
    );
}