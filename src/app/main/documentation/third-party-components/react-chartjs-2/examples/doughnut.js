import { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: ['Red', 'Green', 'Yellow'],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
			hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
		}
	]
};

class DoughnutExample extends Component {
	render() {
		return (
			<div className="flex flex-col items-center w-full max-w-md">
				<h2>Doughnut Example</h2>
				<Doughnut data={data} />
			</div>
		);
	}
}

export default DoughnutExample;
