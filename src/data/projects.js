// Import images
import { Link } from 'react-router-dom';
import WebImage1 from '../images/1.jpg';
import WebImage2 from '../images/2.jpg';
import WebImage3 from '../images/3.jpg';
import WebImage4 from '../images/4.jpg';
import WebImage5 from '../images/5.jpg';
import WebImage6 from '../images/6.jpg';
import WebImage7 from '../images/7.jpg';
import WebImage8 from '../images/8.jpg';
import WebImage9 from '../images/9.jpg';
// import WebImage9 from '../images/9.jpg'; 

export const projectsData = [
	{
		id: 1,
		title: 'Kinmat Store - Amazone Clone App',
		category: 'Web Application',
		img: WebImage1,
		url: <Link to = 'https://kinmatech-online-store.vercel.app' target='_blank'><strong><h2 align="center">View Project</h2></strong></Link>
			// publishDate: 'Jul 26, 2021',
			// tags: 'UI / Frontend',
	},
	{
		id: 2,
		title: 'Kinmatech Portfolio Web App',
		category: 'Web Application',
		img: WebImage2,
		url: <Link to = 'https://kinmatech.vercel.app' target='_blank'><strong><h2 align="center">View Project</h2></strong></Link>
	},
	{
		id: 3,
		title: 'Kinmat TODO Task Manager Web App',
		category: 'Web Application',
		img: WebImage3,
		url: <Link to = 'https://kinmat-task-manager.vercel.app' target='_blank'><strong><h2 align="center">View Project</h2></strong></Link>
	},
	{
		id: 4,
		title: 'Kinmat Analogue Clock App',
		category: 'Web Application',
		img: WebImage4,
		url: <Link to = 'https://kinmat-react-analogue-clock.vercel.app' target='_blank'><strong><h2 align="center">View Project</h2></strong></Link>
	},
	{
		id: 5,
		title: 'Kinmat Task Reminder Digital Web App',
		category: 'Web Application',
		img: WebImage5,
		url: <Link to = 'https://kinmat-task-reminder-app.vercel.app' target='_blank'><strong><h2 align="center">View Project</h2></strong></Link>
		
	},
	{
		id: 6,
		title: 'Kinmat Tinder Clone Web App',
		category: 'Web Application',
		img: WebImage6,
		url: <Link to = 'https://kinmat-tinder-clone.vercel.app' target='_blank'><strong><h2 align="center">View Project</h2></strong></Link>
		

	},
	{
		id: 7,
		title: 'Kinmat Tesla Clone App',
		category: 'Web Application',
		img: WebImage7,
		url: <Link to = 'https://kinmat-tesla-clone.vercel.app/' target='_blank'><strong><h2 align="center">View Project</h2></strong></Link>
		

	},
	{
		id: 8,
		title: 'Kinmatech Online School App',
		category: 'Web Application',
		img: WebImage8,
		url: <Link to = 'https://kinmatech-online-school.vercel.app/' target='_blank'><strong><h2 align="center">View Project</h2></strong></Link>
		

	},

	{
		id: 9,
		title: 'Kinmat Crud App',
		category: 'Web Application',
		img: WebImage9,
		url: <Link to = 'https://kinmatcrudapp.vercel.app/' target='_blank'><strong><h2 align="center">View Project</h2></strong></Link>
		

	},
];
