import mock from '../mock';

const searchDB = [
	{
		id: '1',
		title: 'Dynamically Procrastinate B2C',
		url: 'ourwebaddress.com/articles/procrastinate',
		excerpt:
			'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.'
	},
	{
		id: '2',
		title: 'Cross Media',
		url: 'ourwebaddress.com/articles/cross-media',
		excerpt:
			'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.'
	},
	{
		id: '3',
		title: 'Synergize',
		url: 'ourwebaddress.com/articles/synergize',
		excerpt:
			'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.'
	},
	{
		id: '4',
		title: 'Parallel Platforms',
		url: 'ourwebaddress.com/articles/parallel-paltforms',
		excerpt:
			'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains.'
	},
	{
		id: '5',
		title: 'Growth Strategies',
		url: 'ourwebaddress.com/articles/growth-strategies',
		excerpt:
			'Proactively envisioned multimedia based expertise and cross-media growth strategies. Holistically pontificate installed base portals after maintainable products.'
	},
	{
		id: '6',
		title: 'Methodologies',
		url: 'ourwebaddress.com/articles/methodologies',
		excerpt:
			'Phosfluorescently engage worldwide methodologies with web-enabled technology. Completely pursue scalable customer service through sustainable potentialities.'
	},
	{
		id: '7',
		title: 'E-tailers',
		url: 'ourwebaddress.com/articles/e-trailers',
		excerpt:
			'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.'
	},
	{
		id: '8',
		title: 'Web Readiness',
		url: 'ourwebaddress.com/articles/web-readiness',
		excerpt:
			'Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Dramatically synthesize integrated schemas with optimal networks.'
	}
];

mock.onGet('/api/search').reply(config => {
	return [200, searchDB];
});
