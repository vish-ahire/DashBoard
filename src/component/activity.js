import { AgCharts } from 'ag-charts-react';
import { dataObj } from '../asset/data';

export default function Activity() {


    return (
        <div className=" bg-slate-900 p-3 rounded-md mb-5">
            <h3 className=' mb-4 font-bold text-lg'>Activity</h3>
            <div className='bg-slate-900'>
                <AgCharts options={dataObj} style={{ height: '9em' }} />
            </div>
        </div>
    );
}
