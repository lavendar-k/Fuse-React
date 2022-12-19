import _ from '@lodash';
import { amber, blue, blueGrey, green } from '@material-ui/core/colors';
import mock from '../mock';

const demoSteps = [
	{
		id: '0',
		title: 'Introduction',
		content:
			'<h1>Step 1 - Introduction</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '1',
		title: 'Get the sample code',
		content:
			'<h1>Step 2 - Get the sample code</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '2',
		title: 'Create a Firebase project and Set up your app',
		content:
			'<h1>Step 3 - Create a Firebase project and Set up your app</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '3',
		title: 'Install the Firebase Command Line Interface',
		content:
			'<h1>Step 4 - Install the Firebase Command Line Interface</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '4',
		title: 'Deploy and run the web app',
		content:
			'<h1>Step 5 - Deploy and run the web app</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '5',
		title: 'The Functions Directory',
		content:
			'<h1>Step 6 - The Functions Directory</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '6',
		title: 'Import the Cloud Functions and Firebase Admin modules',
		content:
			'<h1>Step 7 - Import the Cloud Functions and Firebase Admin modules</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '7',
		title: 'Welcome New Users',
		content:
			'<h1>Step 8 - Welcome New Users</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '8',
		title: 'Images moderation',
		content:
			'<h1>Step 9 - Images moderation</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '9',
		title: 'New Message Notifications',
		content:
			'<h1>Step 10 - New Message Notifications</h1>' +
			'<br>' +
			'This is an example step of the course. You can put anything in here from example codes to videos.' +
			'<br><br>' +
			'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
			'To install or upgrade the CLI run the following <b>npm</b> command:' +
			'<br><br>' +
			'<code>npm -g install @angular/cli</code>' +
			'<br><br>' +
			'To verify that the CLI has been installed correctly, open a console and run:' +
			'<br><br>' +
			'<code>ng version</code>' +
			'<br><br>' +
			'<h2>Install dependencies</h2>' +
			'<br>' +
			"To moderate the images we'll need a few Node.js packages:" +
			'<br><br>' +
			'<ul>' +
			'<li>' +
			'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
			'</li>' +
			'<br>' +
			'<li>' +
			'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
			'</li>' +
			'</ul>' +
			'<br>' +
			'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
			'<br><br>' +
			'<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
			'<br><br>' +
			'This will install the three packages locally and add them as declared dependencies in your package.js file.'
	},
	{
		id: '10',
		title: 'Congratulations!',
		content:
			'<h1>Step 11 - Congratulations!</h1>' +
			'<br>' +
			"You've built a full-fidelity, offline-capable progressive web app by leveraging the power of reusable Web Components and Firebase. Why bother with a native app when you know how to do all that?!"
	}
];

const academyDB = {
	categories: [
		{
			id: 0,
			value: 'web',
			label: 'Web',
			color: blue[500]
		},
		{
			id: 1,
			value: 'firebase',
			label: 'Firebase',
			color: amber[500]
		},
		{
			id: 2,
			value: 'cloud',
			label: 'Cloud',
			color: blueGrey[500]
		},
		{
			id: 3,
			value: 'android',
			label: 'Android',
			color: green[500]
		}
	],
	courses: [
		{
			id: '15459251a6d6b397565',
			title: 'Basics of Angular',
			slug: 'basics-of-angular',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'web',
			length: 30,
			totalSteps: 11,
			activeStep: 0,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '154588a0864d2881124',
			title: 'Basics of TypeScript',
			slug: 'basics-of-typeScript',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'web',
			length: 60,
			totalSteps: 11,
			activeStep: 3,
			updated: 'Nov 01, 2017',
			steps: demoSteps
		},
		{
			id: '15453ba60d3baa5daaf',
			title: 'Android N: Quick Settings',
			slug: 'android-n-quick-settings',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'android',
			length: 120,
			totalSteps: 11,
			activeStep: 11,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '15453a06c08fb021776',
			title: 'Keep Sensitive Data Safe and Private',
			slug: 'keep-sensitive-data-safe-and-private',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'android',
			length: 45,
			totalSteps: 11,
			activeStep: 2,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '15427f4c1b7f3953234',
			title: 'Building a gRPC Service with Java',
			slug: 'building-a-grpc-service-with-java',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'cloud',
			length: 30,
			totalSteps: 11,
			activeStep: 11,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '1542d75d929a603125',
			title: 'Build a PWA Using Workbox',
			slug: 'build-a-pwa-using-workbox',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'web',
			length: 120,
			totalSteps: 11,
			activeStep: 8,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '1543ee3a5b43e0f9f45',
			title: 'Build an App for the Google Assistant with Firebase and Dialogflow',
			slug: 'build-an-app-for-the-google-assistant-with-firebase-and-dialogflow',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'firebase',
			length: 30,
			totalSteps: 11,
			activeStep: 0,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '1543cc4515df3146112',
			title: 'Cloud Functions for Firebase',
			slug: 'cloud-functions-for-firebase',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'firebase',
			length: 45,
			totalSteps: 11,
			activeStep: 7,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '154398a4770d7aaf9a2',
			title: "Manage Your Pivotal Cloud Foundry App's Using Apigee Edge",
			slug: 'manage-your-pivotal-cloud-foundry-apps-using-apigee-Edge',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'cloud',
			length: 90,
			totalSteps: 11,
			activeStep: 5,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '15438351f87dcd68567',
			title: 'Building Beautiful UIs with Flutter',
			your: 'building-beautiful-uis-with-flutter',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'web',
			length: 90,
			totalSteps: 11,
			activeStep: 0,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '1544e43dcdae6ebf876',
			title: 'Cloud Firestore',
			slug: 'cloud-firestore',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'firebase',
			length: 90,
			totalSteps: 11,
			activeStep: 0,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '1541ca7af66da284177',
			title: 'Customize Network Topology with Subnetworks',
			slug: 'customize-network-topology-with-subnetworks',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'web',
			length: 45,
			totalSteps: 11,
			activeStep: 0,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '154297167e781781745',
			title: 'Looking at Campaign Finance with BigQuery',
			slug: 'looking-at-campaign-finance-with-bigquery',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'cloud',
			length: 60,
			totalSteps: 11,
			activeStep: 3,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '154537435d5b32bf11a',
			title: 'Firebase Android',
			slug: 'firebase-android',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'android',
			length: 45,
			totalSteps: 11,
			activeStep: 0,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '154204e45a59b168453',
			title: 'Simulating a Thread Network Using OpenThread',
			slug: 'simulating-a-thread-network-using-openthread',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'web',
			length: 45,
			totalSteps: 11,
			activeStep: 1,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '1541dd1e05dfc439216',
			title: 'Your First Progressive Web App',
			slug: 'your-first-progressive-web-app',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'web',
			length: 30,
			totalSteps: 11,
			activeStep: 0,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '1532dfc67e704e48515',
			title: 'Launch Cloud Datalab',
			slug: 'launch-cloud-datalab',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'cloud',
			length: 60,
			totalSteps: 11,
			activeStep: 0,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		},
		{
			id: '1542e43dfaae6ebf226',
			title: 'Personalize Your iOS App with Firebase User Management',
			slug: 'personalize-your-ios-app-with-firebase-user-management',
			description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			category: 'firebase',
			length: 90,
			totalSteps: 11,
			activeStep: 11,
			updated: 'Jun 28, 2017',
			steps: demoSteps
		}
	]
};

mock.onGet('/api/academy-app/categories').reply(() => {
	return [200, academyDB.categories];
});

mock.onGet('/api/academy-app/courses').reply(() => {
	return [200, academyDB.courses.map(_course => _.omit(_course, ['steps']))];
});

mock.onGet('/api/academy-app/course').reply(request => {
	const { courseId } = request.params;
	const response = _.find(academyDB.courses, { id: courseId });
	return [200, response];
});

mock.onPost('/api/academy-app/course/save').reply(request => {
	const data = JSON.parse(request.data);
	let course = null;

	academyDB.courses = academyDB.courses.map(_course => {
		if (_course.id === data.id) {
			course = data;
			return course;
		}
		return _course;
	});

	if (!course) {
		course = data;
		academyDB.courses = [...academyDB.courses, course];
	}

	return [200, course];
});

mock.onPost('/api/academy-app/course/update').reply(request => {
	const data = JSON.parse(request.data);
	academyDB.courses = academyDB.courses.map(_course => {
		if (_course.id === data.id) {
			return _.merge(_course, data);
		}
		return _course;
	});

	return [200, data];
});
