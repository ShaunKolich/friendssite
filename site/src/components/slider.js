import React from 'react';
import { render } from 'react-dom';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// import 'normalize.css/normalize.css';
import '../css/slider-animations.css';
import '../css/slider-styles.css';

import Image1 from '../img/hand-4448891_640.jpg';
import Image2 from '../img/monitor-1307227_640.jpg';
import Image3 from '../img/digital-388075_640.jpg';

const content = [
	{
		title: 'Front-End Web Developer or Full Stack Web Developer',
		description:
		'Experienced in HTML5, CSS, React JS, Bootstrap, LESS compiler, Rest API, JSON Token, Cookies, Node JS, Express, and more',
		button: 'Learn More',
		image: Image1
		
		
	},
	{
		title: 'Attended Lambda School',
		description:
		'An immersive program to prepare you for a successful career in web development. Learn JavaScript, HTML, CSS, Node, React, Python, Express and SQL',
		button: 'Discover More',
		image: Image2
		
	},
	{
		title: 'Military Veteran and Information Technology',
		description:
		'Served in the US Navy for eight years, and worked in Information Technology over 5 years. I have skills in Teamwork, Leadership, Management,Training and Information Technology',
		button: 'Learn More',
		image: Image3
		
	}
];

const Sliders = () => (
	<div>
		
		<div className="wrapper">
		</div>
		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					<section>
						
					</section>
				</div>
			))}
		</Slider>
	</div>
);

export default Sliders;