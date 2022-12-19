import mock from '../mock';

const analyticsDashboardAppDB = {
	widgets: [
		{
			id: 'widget1',
			series: {
				2019: [
					{
						name: 'Sales',
						data: [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9],
						fill: 'start'
					}
				],
				2020: [
					{
						name: 'Sales',
						data: [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8],
						fill: 'start'
					}
				],
				2021: [
					{
						name: 'Sales',
						data: [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9],
						fill: 'start'
					}
				]
			},
			options: {
				chart: {
					type: 'area',
					height: '100%',
					background: 'transparent',
					toolbar: {
						show: false
					},
					zoom: {
						enabled: false
					}
				},
				theme: {
					mode: 'dark'
				},
				dataLabels: {
					enabled: false
				},
				xaxis: {
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					tooltip: {
						enabled: false
					},
					axisBorder: {
						show: false
					}
				},
				yaxis: {
					axisBorder: {
						show: false
					}
				},
				markers: {
					size: 3,
					strokeWidth: 1.5,
					strokeOpacity: 1,
					strokeDashArray: 0,
					fillOpacity: 1,
					shape: 'circle',
					radius: 2,
					hover: {
						size: 5
					}
				},
				fill: {
					type: 'solid',
					opacity: 0.7,
					gradient: {
						shadeIntensity: 0.4,
						opacityFrom: 1,
						opacityTo: 0.5,
						stops: [30, 100, 100]
					}
				},
				grid: {
					show: true,
					strokeDashArray: 3,
					position: 'back',
					xaxis: {
						lines: {
							show: true
						}
					},
					yaxis: {
						lines: {
							show: true
						}
					},
					padding: {
						top: 0,
						right: 0,
						bottom: 0,
						left: 0
					}
				},
				stroke: {
					show: true,
					curve: 'smooth',
					lineCap: 'butt',
					width: 1.5,
					dashArray: 0
				}
			}
		},
		{
			id: 'widget2',
			conversion: {
				value: 492,
				ofTarget: 13
			},
			series: [
				{
					name: 'Conversion',
					data: [221, 428, 380, 471, 413, 344, 494]
				}
			],
			options: {
				chart: {
					type: 'area',
					height: '100%',
					sparkline: {
						enabled: true
					}
				},
				fill: {
					type: 'solid',
					opacity: 0.7
				},
				xaxis: {
					categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
				},
				tooltip: {
					followCursor: true,
					theme       : 'dark',
					fixed: {
						enabled: false,
						position: 'topRight',
						offsetX: 0,
						offsetY: 0,
					},
				}
			}
		},
		{
			id: 'widget3',
			impressions: {
				value: '87k',
				ofTarget: 12
			},
			series: [
				{
					name: 'Impression',
					data: [
						67000,
						54000,
						82000,
						57000,
						72000,
						57000,
						87000,
						72000,
						89000,
						98700,
						112000,
						136000,
						110000,
						149000,
						98000
					]
				}
			],
			options: {
				chart: {
					type: 'area',
					height: '100%',
					sparkline: {
						enabled: true
					}
				},
				xaxis: {
					categories: [
						'Jan 1',
						'Jan 2',
						'Jan 3',
						'Jan 4',
						'Jan 5',
						'Jan 6',
						'Jan 7',
						'Jan 8',
						'Jan 9',
						'Jan 10',
						'Jan 11',
						'Jan 12',
						'Jan 13',
						'Jan 14',
						'Jan 15'
					]
				},
				fill: {
					type: 'solid',
					opacity: 0.7
				},
				tooltip: {
					followCursor: true,
					theme       : 'dark',
					fixed: {
						enabled: false,
						position: 'topRight',
						offsetX: 0,
						offsetY: 0,
					},
				}
			}
		},
		{
			id: 'widget4',
			visits: {
				value: 882,
				ofTarget: -9
			},
			series: [
				{
					name: 'Visits',
					data: [432, 428, 327, 363, 456, 267, 231]
				}
			],
			options: {
				chart: {
					type: 'area',
					height: '100%',
					sparkline: {
						enabled: true
					}
				},
				xaxis: {
					categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
				},
				fill: {
					type: 'solid',
					opacity: 0.7
				},
				tooltip: {
					followCursor: true,
					theme       : 'dark',
					fixed: {
						enabled: false,
						position: 'topRight',
						offsetX: 0,
						offsetY: 0,
					},
				}
			}
		},
		{
			id: 'widget5',
			series: {
				today: [
					{
						name: 'Visitors',
						data: [1210, 1380, 1520, 1290, 490, 1390, 1050, 680, 1300, 2140, 1520, 1890]
					},
					{
						name: 'Page Views',
						data: [3000, 3400, 4100, 3800, 2200, 3200, 2900, 1900, 2900, 3900, 2500, 3800]
					}
				],
				yesterday: [
					{
						name: 'Visitors',
						data: [1190, 1300, 2340, 1220, 1590, 1990, 1250, 1080, 2000, 2380, 2420, 2190]
					},
					{
						name: 'Page views',
						data: [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800]
					}
				]
			},
			options: {
				chart: {
					type: 'area',
					height: '100%',
					stacked: true,
					foreColor: '#999',
					toolbar: {
						show: false
					},
					zoom: {
						enabled: false
					}
				},
				stroke: {
					curve: 'smooth',
					width: 3
				},
				dataLabels: {
					enabled: false
				},
				markers: {
					size: 0,
					strokeColor: '#fff',
					strokeWidth: 3,
					strokeOpacity: 1,
					fillOpacity: 1,
					hover: {
						size: 6
					}
				},
				xaxis: {
					categories: [
						'12am',
						'2am',
						'4am',
						'6am',
						'8am',
						'10am',
						'12pm',
						'2pm',
						'4pm',
						'6pm',
						'8pm',
						'10pm'
					],
					axisBorder: {
						show: false
					},
					axisTicks: {
						show: false
					}
				},
				yaxis: {
					tooltip: {
						enabled: true
					}
				},
				grid: {
					position: 'back'
				},
				legend: {
					show: false
				},
				fill: {
					type: 'solid',
					opacity: 0.7
				},
				tooltip: {
					followCursor: true,
					theme       : 'dark',
					fixed: {
						enabled: false,
						position: 'topRight',
						offsetX: 0,
						offsetY: 0,
					},
				}
			}
		},
		{
			id: 'widget6',
			markers: [
				{
					lat: 52,
					lng: -73,
					label: '120'
				},
				{
					lat: 37,
					lng: -104,
					label: '498'
				},
				{
					lat: 21,
					lng: -7,
					label: '443'
				},
				{
					lat: 55,
					lng: 75,
					label: '332'
				},
				{
					lat: 51,
					lng: 7,
					label: '50'
				},
				{
					lat: 31,
					lng: 12,
					label: '221'
				},
				{
					lat: 45,
					lng: 44,
					label: '455'
				},
				{
					lat: -26,
					lng: 134,
					label: '231'
				},
				{
					lat: -9,
					lng: -60,
					label: '67'
				},
				{
					lat: 33,
					lng: 104,
					label: '665'
				}
			],
			styles: [
				{
					featureType: 'administrative',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#444444'
						}
					]
				},
				{
					featureType: 'landscape',
					elementType: 'all',
					stylers: [
						{
							color: '#f2f2f2'
						}
					]
				},
				{
					featureType: 'poi',
					elementType: 'all',
					stylers: [
						{
							visibility: 'off'
						}
					]
				},
				{
					featureType: 'road',
					elementType: 'all',
					stylers: [
						{
							saturation: -100
						},
						{
							lightness: 45
						}
					]
				},
				{
					featureType: 'road.highway',
					elementType: 'all',
					stylers: [
						{
							visibility: 'simplified'
						}
					]
				},
				{
					featureType: 'road.arterial',
					elementType: 'labels.icon',
					stylers: [
						{
							visibility: 'off'
						}
					]
				},
				{
					featureType: 'transit',
					elementType: 'all',
					stylers: [
						{
							visibility: 'off'
						}
					]
				},
				{
					featureType: 'water',
					elementType: 'all',
					stylers: [
						{
							color: '#039be5'
						},
						{
							visibility: 'on'
						}
					]
				}
			]
		},
		{
			id: 'widget7',
			series: {
				Today: [
					{
						data: [92.8, 6.1, 1.1],
						change: [-0.6, 0.7, 0.1]
					}
				],
				Yesterday: [
					{
						data: [77.2, 8.4, 14.4],
						change: [-2.3, 0.3, -0.2]
					}
				],
				'Last 7 days': [
					{
						data: [88.2, 9.2, 2.6],
						change: [1.9, -0.4, 0.3]
					}
				],
				'Last 28 days': [
					{
						data: [65.2, 2.6, 32.2],
						change: [-12.6, -0.7, 4.2]
					}
				],
				'Last 90 days': [
					{
						data: [93.5, 4.2, 2.3],
						change: [2.6, -0.7, 2.1]
					}
				]
			},
			options: {
				chart: {
					height: '100%',
					type: 'donut'
				},
				labels: ['Desktop', 'Mobile', 'Tablet'],
				legend: {
					show: false
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					width: 2,
					colors: undefined
				},
				fill: {
					opacity: 1
				},
				theme: {
					monochrome: {
						enabled: true,
						shadeTo: 'light',
						shadeIntensity: 0.65
					}
				},
				states: {
					hover: {
						filter: {
							type: 'darken'
						}
					}
				}
			}
		},
		{
			id: 'widget8',
			series: [
				[
					{
						name: '1Day',
						data: [72, 65, 70, 78, 85, 82, 88]
					}
				],
				[
					{
						name: '1Week',
						data: [540, 539, 527, 548, 540, 552, 566]
					}
				],
				[
					{
						name: '1Month',
						data: [1520, 1529, 1567, 1588, 1590, 1652, 1622]
					}
				]
			],
			labels: ['1', '2', '3', '4', '5', '6', '7'],
			options: {
				chart: {
					type: 'line',
					height: '100%',
					toolbar: {
						show: false
					},
					zoom: {
						enabled: false
					}
				},
				stroke: {
					width: 3
				},
				dataLabels: {
					enabled: false
				},
				markers: {
					size: 3,
					strokeWidth: 1,
					strokeOpacity: 1,
					fillOpacity: 1,
					hover: {
						size: 3
					}
				},
				xaxis: {
					labels: {
						show: false
					},
					axisBorder: {
						show: false
					},
					axisTicks: {
						show: false
					}
				},
				yaxis: {
					tooltip: {
						enabled: true
					}
				},
				grid: {
					position: 'back',
					padding: {
						top: 0,
						bottom: 0
					}
				},
				legend: {
					show: false
				},
				tooltip: {
					followCursor: true,
					theme       : 'dark',
					fixed: {
						enabled: false,
						position: 'topRight',
						offsetX: 0,
						offsetY: 0,
					},
				}
			},
			today: '12,540',
			change: {
				value: 321,
				percentage: 2.05
			}
		},
		{
			id: 'widget9',
			rows: [
				{
					title: 'Holiday Travel',
					clicks: 3621,
					conversion: 90
				},
				{
					title: 'Get Away Deals',
					clicks: 703,
					conversion: 7
				},
				{
					title: 'Airfare',
					clicks: 532,
					conversion: 0
				},
				{
					title: 'Vacation',
					clicks: 201,
					conversion: 8
				},
				{
					title: 'Hotels',
					clicks: 94,
					conversion: 4
				}
			]
		}
	]
};

mock.onGet('/api/analytics-dashboard-app/widgets').reply(config => {
	return [200, analyticsDashboardAppDB.widgets];
});
