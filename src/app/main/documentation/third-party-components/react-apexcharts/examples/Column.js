import {useState} from 'react';
import Chart from 'react-apexcharts'

function Column()
{
    const [state, setState] = useState({
        options: {
            dataLabels: {
                enabled: false
            },
            xaxis     : {
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        },
        series : [
            {
                data: [30, 40, 25, 50, 49, 21, 70, 51]
            }
        ],
    });

    return (
        <div className="column">
            <Chart options={state.options} series={state.series} type="bar" width="500"/>
        </div>
    );
}

export default Column;
