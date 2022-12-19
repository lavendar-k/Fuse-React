import { Component } from 'react';
import { Line } from 'react-chartjs-2';

const initialState = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'My First dataset',
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: 'rgba(75,192,192,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
};

class Graph extends Component {
	state = initialState;

	componentDidMount() {
		const _this = this;

		setInterval(function() {
			const oldDataSet = _this.state.datasets[0];
			const newData = [];

			for (let x = 0; x < _this.state.labels.length; x++) {
				newData.push(Math.floor(Math.random() * 100));
			}

			const newDataSet = {
				...oldDataSet
			};

			newDataSet.data = newData;

			const newState = {
				...initialState,
				datasets: [newDataSet]
			};

			_this.setState(newState);
		}, 5000);
	}

	render() {
		return <Line data={this.state} />;
	}
}

class RandomizedDataLineExample extends Component {
	render() {
		return (
			<div className="flex flex-col items-center w-full max-w-md">
				<h2>Random Animated Line Example</h2>
				<Graph />
			</div>
		);
	}
}

export default RandomizedDataLineExample;
