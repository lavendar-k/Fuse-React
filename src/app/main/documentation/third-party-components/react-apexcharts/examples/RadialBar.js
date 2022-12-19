import {useState} from 'react';
import Chart from 'react-apexcharts'

function RadialBar()
{
    const [state, setState] = useState({
        options: {
            labels     : ['RadialBar'],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },
        },
        series : [68],
    });

    return (
        <div className="radialbar">
            <Chart options={state.options} series={state.series} type="radialBar" height="380"/>
        </div>
    );
}

export default RadialBar;
