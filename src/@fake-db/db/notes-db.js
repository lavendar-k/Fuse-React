import FuseUtils from '@fuse/utils';
import mock from '../mock';

const notesDB = {
	notes: [
		{
			id: '5739d1fb4d27bc5341fd33s1',
			title: '',
			description: 'Find new company name!',
			archive: false,
			image: '',
			time: '2018-02-25T04:01:06.587Z',
			reminder: null,
			checklist: [],
			labels: ['5725a6809fdd915739187ed5']
		},
		{
			id: '5739d1fb4d27bc5341fd33b3',
			title: 'Send photos from the beach to John',
			description: '',
			archive: false,
			image: 'assets/images/notes/beach.jpeg',
			time: '2018-05-10T04:01:06.587Z',
			reminder: null,
			checklist: [],
			labels: ['5725a6806acf030f9341e932', '5725a6806acf030f9341e925']
		},
		{
			id: '5739d1fbaac9710256574208',
			title: '',
			description: 'Lets think about for the new theme',
			archive: false,
			image: '',
			time: '2018-04-12T15:14:56.587Z',
			reminder: '2018-03-03T18:08:32.587Z',
			checklist: [],
			labels: ['5725a680606588342058356d']
		},
		{
			id: '5739d1fb843f747d5dc0e42a',
			title: '',
			description: 'Theming support for Chat app',
			archive: false,
			image: '',
			time: '2018-03-21T23:23:53.587Z',
			reminder: null,
			checklist: [],
			labels: ['5725a6809fdd915739187ed5']
		},
		{
			id: '5739d1fbf4e68a871a3c9ab8',
			title: 'Gift Ideas',
			description: "Young sister's birthday is coming",
			archive: false,
			image: '',
			time: '2018-04-21T02:33:11.587Z',
			reminder: null,
			checklist: [
				{
					id: '1',
					checked: false,
					text: 'scarf'
				},
				{
					id: '2',
					checked: false,
					text: 'new bike helmet'
				},
				{
					id: '3',
					checked: true,
					text: 'necklease'
				},
				{
					id: '4',
					checked: false,
					text: 'flowers'
				}
			],
			labels: ['5725a6802d10e277a0f35739']
		},
		{
			id: '5739d1fbf2726fe3e5e5014a',
			title: 'Shoping List',
			description: '',
			archive: false,
			image: '',
			time: '2018-04-10T22:18:14.587Z',
			reminder: '2018-01-13T11:09:00.587Z',
			checklist: [
				{
					id: '1',
					checked: true,
					text: 'Shortening'
				},
				{
					id: '2',
					checked: true,
					text: 'Margarine'
				},
				{
					id: '3',
					checked: false,
					text: 'Canned Stewed Tomatoes'
				},
				{
					id: '4',
					checked: true,
					text: 'Onions'
				},
				{
					id: '5',
					checked: true,
					text: 'Garlic'
				}
			],
			labels: ['5725a68031fdbb1db2c1af47']
		},
		{
			id: '5739d1fb47d9bac96ec0d54d',
			title: 'Ng Conference Schedule',
			description: '',
			archive: false,
			image: '',
			time: '2018-01-21T22:46:48.587Z',
			reminder: '2018-05-14T06:47:19.587Z',
			checklist: [
				{
					id: '1',
					checked: true,
					text: 'breakfast'
				},
				{
					id: '2',
					checked: true,
					text: 'Welcome'
				},
				{
					id: '3',
					checked: true,
					text: 'Keynote 1 - Brad Green  Jules Kremer'
				},
				{
					id: '4',
					checked: false,
					text: 'An Angular 2 Force Awakens John Papa'
				},
				{
					id: '5',
					checked: false,
					text: 'Lunch'
				}
			],
			labels: ['5725a6809fdd915739187ed5', '5725a68031fdbb1db2c1af47']
		},
		{
			id: '5739d1fbb786bea648179ece',
			title: '',
			description: 'Organize the surprise party',
			archive: false,
			image: '',
			time: '2018-03-11T06:55:30.587Z',
			reminder: '2018-04-01T07:35:05.587Z',
			checklist: [],
			labels: ['5725a6802d10e277a0f35739']
		},
		{
			id: '5739d1fbfed6d59d8427f6e3',
			title: 'Plan the road trip',
			description: '',
			archive: false,
			image: 'assets/images/notes/road-trip.jpeg',
			time: '2018-05-01T00:15:14.587Z',
			reminder: null,
			checklist: [],
			labels: ['5725a6806acf030f9341e932']
		},
		{
			id: '5739d1fbc4ebca7d947b4763',
			title: '',
			description: "Don't forget to take medicine",
			archive: true,
			image: '',
			time: '2018-01-05T15:08:41.587Z',
			reminder: '2018-04-01T21:35:24.587Z',
			checklist: [],
			labels: ['5725a6806acf030f9341e925']
		},
		{
			id: '5739d1fb2efbc0e3e8c30c4d',
			title: 'Office Address',
			description: '933 8th Street Stamford, CT 06902',
			archive: false,
			image: '',
			time: '2018-04-19T08:27:28.587Z',
			reminder: null,
			checklist: [],
			labels: ['5725a6809fdd915739187ed5']
		},
		{
			id: '5739d1fb46da846f60d70b2c',
			title: 'Todo',
			description: '',
			archive: false,
			image: '',
			time: '2018-02-08T15:13:56.587Z',
			reminder: '2018-04-25T09:40:39.587Z',
			checklist: [
				{
					id: '1',
					checked: false,
					text: 'Wash clothes'
				},
				{
					id: '2',
					checked: true,
					text: 'Feed the dog'
				}
			],
			labels: ['5725a6806acf030f9341e925']
		},
		{
			id: '5739d1fbcf298e41a75f3941',
			title: '',
			description: 'Add new icons',
			archive: true,
			image: '',
			time: '2018-05-01T04:21:35.587Z',
			reminder: '2018-04-12T16:17:28.587Z',
			checklist: [],
			labels: ['5725a680606588342058356d']
		},
		{
			id: '5739d1fbeac05b8bcc2959cd',
			title: 'Team meeting',
			description: 'About the future of the web',
			archive: true,
			image: '',
			time: '2018-05-13T20:11:27.587Z',
			reminder: '2018-01-19T09:17:15.587Z',
			checklist: [],
			labels: ['5725a6809fdd915739187ed5']
		},
		{
			id: '5739d1fb2fe509295e0847b5',
			title: '',
			description: 'Lunch with parents',
			archive: false,
			image: '',
			time: '2018-01-17T00:40:05.587Z',
			reminder: null,
			checklist: [],
			labels: ['5725a6802d10e277a0f35739']
		}
	],
	labels: [
		{
			id: '5725a6802d10e277a0f35739',
			name: 'Family',
			handle: 'family'
		},
		{
			id: '5725a6809fdd915739187ed5',
			name: 'Work',
			handle: 'work'
		},
		{
			id: '5725a68031fdbb1db2c1af47',
			name: 'Todos',
			handle: 'todos'
		},
		{
			id: '5725a680606588342058356d',
			name: 'Prior',
			handle: 'prior'
		},
		{
			id: '5725a6806acf030f9341e925',
			name: 'Personal',
			handle: 'personal'
		},
		{
			id: '5725a6806acf030f9341e932',
			name: 'Friends',
			handle: 'friends'
		}
	]
};

mock.onGet('/api/notes-app/notes').reply(config => {
	return [200, notesDB.notes];
});

mock.onGet('/api/notes-app/labels').reply(config => {
	return [200, notesDB.labels];
});

mock.onPost('/api/notes-app/create-note').reply(request => {
	const data = JSON.parse(request.data);
	const newNote = {
		...data.note,
		id: FuseUtils.generateGUID()
	};
	notesDB.notes = [newNote, ...notesDB.notes];
	return [200, newNote];
});

mock.onPost('/api/notes-app/update-note').reply(request => {
	const { note } = JSON.parse(request.data);

	notesDB.notes = notesDB.notes.map(_note => {
		if (note.id === _note.id) {
			return note;
		}
		return _note;
	});

	return [200, note];
});

mock.onPost('/api/notes-app/update-labels').reply(request => {
	const data = JSON.parse(request.data);

	notesDB.labels = data.labels;

	return [200, notesDB.labels];
});

mock.onPost('/api/notes-app/remove-note').reply(request => {
	const data = JSON.parse(request.data);

	notesDB.notes = notesDB.notes.filter(note => data.noteId !== note.id);

	return [200, data.noteId];
});
