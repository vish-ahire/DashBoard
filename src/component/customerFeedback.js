import { feedback } from "../asset/data";
export default function CustomerFeedback() {

    return (
        <div className="ml-5 bg-slate-900 p-3 rounded-md ">
            <h3 className="font-bold text-lg">Customer's Feedback</h3>
            {feedback.map((e, index) => (
                <div key={index} className="m-1">
                    <h4 className="text-xs">{e.name}</h4>
                    <div className="text-yellow-500">{'★'.repeat(e.rating)}</div>
                    <p className="text-xs font-extralight text-gray-400">{e.comment}</p>
                </div>
            ))}
        </div>
    );
}