import mock from '../mock';

const fileManagerDB = {
	files: [
		{
			id: '1',
			name: 'Work Documents',
			type: 'folder',
			owner: 'me',
			size: '',
			modified: 'July 8, 2017',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true
		},
		{
			id: '2',
			name: 'Public Documents',
			type: 'folder',
			owner: 'public',
			size: '',
			modified: 'July 8, 2017',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true
		},
		{
			id: '3',
			name: 'Private Documents',
			type: 'folder',
			owner: 'me',
			size: '',
			modified: 'July 8, 2017',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true
		},
		{
			id: '4',
			name: 'Ongoing projects',
			type: 'document',
			owner: 'Emily Bennett',
			size: '1.2 Mb',
			modified: 'July 8, 2017',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true,
			preview: 'assets/images/etc/sample-file-preview.jpg'
		},
		{
			id: '5',
			name: 'Shopping list',
			type: 'document',
			owner: 'Emily Bennett',
			size: '980 Kb',
			modified: 'July 8, 2017',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true,
			preview: 'assets/images/etc/sample-file-preview.jpg'
		},
		{
			id: '6',
			name: 'Invoices',
			type: 'spreadsheet',
			owner: 'Emily Bennett',
			size: '750 Kb',
			modified: 'July 8, 2017',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true,
			preview: 'assets/images/etc/sample-file-preview.jpg'
		},
		{
			id: '7',
			name: 'Crash logs',
			type: 'document',
			owner: 'Emily Bennett',
			size: '980 Mb',
			modified: 'July 8, 2017',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true,
			preview: 'assets/images/etc/sample-file-preview.jpg'
		},
		{
			id: '8',
			name: 'System logs',
			type: 'document',
			owner: 'Emily Bennett',
			size: '52 Kb',
			modified: 'July 8, 2017',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true,
			preview: 'assets/images/etc/sample-file-preview.jpg'
		},
		{
			id: '9',
			name: 'Prices',
			type: 'spreadsheet',
			owner: 'Emily Bennett',
			size: '27 Mb',
			modified: 'July 8, 2017',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true,
			preview: 'assets/images/etc/sample-file-preview.jpg'
		},
		{
			id: '10',
			name: 'Anabelle Manual',
			type: 'document',
			owner: 'Emily Bennett',
			size: '1.1 Kb',
			modified: 'July 8, 2017',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true,
			preview: 'assets/images/etc/sample-file-preview.jpg'
		},
		{
			id: '11',
			name: 'Steam summer sale budget',
			type: 'spreadsheet',
			owner: 'Emily Bennett',
			size: '505 Kb',
			modified: 'July 8, 2017',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true,
			preview: 'assets/images/etc/sample-file-preview.jpg'
		}
	]
};

mock.onGet('/api/file-manager-app/files').reply(config => {
	return [200, fileManagerDB.files];
});
