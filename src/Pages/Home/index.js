import React, { useState } from 'react';
import { useLottie } from 'lottie-react';
import Project1 from '../../Components/Project1';
import Project2 from '../../Components/Project2';
import Project3 from '../../Components/Project3';
import Project4 from '../../Components/Project4';
import Contact from '../../Components/Contact';

import groovyWalkAnimation from './groovy.json';
import MKTFY from '../../Assets/MKTFY-home.png';
import MKTFYalt from '../../Assets/MKTFY-marketing.png';
import MERN from '../../Assets/Mern-sample.png';
import OG from '../../Assets/OLD-desktop.png';
import Profile from '../../Assets/profileMoir-removebg.png';
import './index.css';

export default function Home() {
	const [showDetails, setShowDetails] = useState(0);

	const style = {
		height: '30rem',
		padding: '20px',
	};
	const options = {
		animationData: groovyWalkAnimation,
		loop: 1,
	};
	const { View } = useLottie(options, style);

	const distance = (1500 / (window.innerWidth * 100)) * 10000 + 'vw';
	console.log('inner width', window.innerWidth);
	console.log(distance);

	const ScrollRight = () => {
		const el = document.getElementById('container');
		let x = (window.innerWidth * 77) / 100;
		const y = 0;
		console.log('x value:', x);
		console.log('y value:', y);

		el.style.scrollBehavior = 'smooth';
		el.scrollLeft = x;
	};

	const ScrollLeft = () => {
		const el = document.getElementById('container');
		let x = -((window.innerWidth * 77) / 100);
		const y = 0;
		console.log('x value:', x);
		console.log('y value:', y);

		el.style.scrollBehavior = 'smooth';
		el.scrollLeft = x;
	};

	return (
		<div style={{ boxSizing: 'border-box' }}>
			<div className="flex flex-row gap-40 justify-center items-center p-20 ">
				<div className=" flex flex-col justify-center bg-slate-200 rounded-xl shadow-xl p-8 ">
					<div className="text-6xl font-bold">JON MOIR</div>
					<div>{View}</div>
					<div className="text-4xl font-bold p-5 drop-shadow-xl">
						FRONT END DEVELOPER
					</div>
					<div>Always learning through curiosity and imagination</div>
					<div>
						I design and code clean and performant applications, and I love what
						I do.
					</div>
					<button
						onClick={() => {
							setShowDetails(5);
						}}
					>
						Contact Me
					</button>
				</div>
				<div className="-mt-96">
					<div
						className="-z-10 h-96 w-96 rounded-full translate-y-96 m-0"
						style={{ backgroundColor: '#DADE64' }}
					></div>
					<img
						src={Profile}
						alt="profile"
						className="border-4 rounded-2xl grayscale object-cover"
					/>
				</div>
			</div>

			<div className="flex justify-center text-4xl border-4 p-4 m-4 rounded-2xl">
				<div className="flex flex-row align-middle p-10">
					<button
						className="h-100 w-100 bg-yellow-300 p-10 m-4"
						onClick={ScrollLeft}
					>
						{'<'}
					</button>
					<div
						id="container"
						className="scrollbar-hide6"
						style={{
							display: 'flex',
							flexDirection: 'row',
							height: '400px',
							maxWidth: '77vw',
							overflowX: 'hidden',
							border: '1px solid black',
						}}
					>
						<div
							style={{
								backgroundColor: 'yellow',
								minWidth: `${distance}`,
								margin: '10px 10px 10px 20px',
							}}
						>
							Show 1
						</div>
						<div
							style={{
								backgroundColor: 'yellow',
								minWidth: `${distance}`,
								margin: '10px 10px 10px 20px',
							}}
						>
							Show 2
						</div>
						<div
							style={{
								backgroundColor: 'yellow',
								minWidth: `${distance}`,
								margin: '10px 10px 10px 20px',
							}}
						>
							Show 3
						</div>
						<div
							style={{
								backgroundColor: 'yellow',
								minWidth: `${distance}`,
								margin: '10px 10px 10px 20px',
							}}
						>
							Show 4
						</div>
					</div>
					<button
						className="h-100 w-100 bg-yellow-300 p-10 m-4"
						onClick={ScrollRight}
					>
						{'>'}
					</button>
				</div>
			</div>

			<div className="text-xl border-4 p-4 m-4 rounded-2xl">
				<h1>Skills</h1>
				<h3>development/design/deployment</h3>

				<ul>
					<li>
						Knowledgeable in React.js, Redux, Next.js, Express, Tailwind,
						Bootstrap, Styled Components, Material UI, ChakraUI, and Ant Design
					</li>
					<li>
						Understanding of Agile development methodologies and CI/CD pipelines
					</li>
					<li>
						Experimental experience with Node.js, MongoDB, Firebase, Apollo
						Client, and GraphQL for full-stack development
					</li>
					<li>
						UI/UX design using Figma and Adobe XD for high and low-fidelity
						prototypes
					</li>
					<li>
						Deployment using Netlify, Vercel, AWS, Render, and applying custom
						domains
					</li>
				</ul>
			</div>

			<div className="border-4 m-4 rounded-2xl h-fit p-10">
				<div className="text-2xl p-4">Projects</div>
				<div>
					<ul className="flex flex-wrap gap-20 justify-center p-8">
						<li>
							<button
								onClick={() => {
									setShowDetails(1);
								}}
							>
								<div className="flex flex-col justify-center h-fit w-auto bg-slate-200 rounded-xl p-4 shadow-xl hover:scale-125 hover:bg-slate-400">
									<div className="text-xl font-bold">
										MKTFY - Web Application
									</div>

									<img
										src={MKTFY}
										alt="MKTFY-log"
										className="p-8 h-56 object-cover rounded-xl drop-shadow-xl"
									/>
								</div>
							</button>
							{showDetails === 1 && (
								<Project1
									setShowDetails={setShowDetails}
									onClose={() => setShowDetails(0)}
								/>
							)}
						</li>
						<li>
							<button
								onClick={() => {
									setShowDetails(2);
								}}
							>
								<div className="flex flex-col justify-center h-fit w-auto bg-slate-200 rounded-xl p-4 shadow-xl hover:scale-125 hover:bg-slate-400">
									<div className="text-xl font-bold">
										MKTFY - Marketing Site
									</div>

									<img
										src={MKTFYalt}
										alt="MKTFY-log"
										className="drop-shadow-xl p-8 h-56 object-cover -z-1"
									/>
								</div>
							</button>
							{showDetails === 2 && (
								<Project2
									setShowDetails={setShowDetails}
									onClose={() => setShowDetails(0)}
								/>
							)}
						</li>
						<li>
							<button
								onClick={() => {
									setShowDetails(3);
								}}
							>
								<div className="flex flex-col justify-center h-fit w-auto bg-slate-200 rounded-xl p-4 shadow-xl hover:scale-125 hover:bg-slate-400">
									<div className="text-xl font-bold">
										Movie Search - MERN-Stack Project
									</div>

									<img
										src={MERN}
										alt="MERN project"
										className="drop-shadow-xl p-8 h-56 object-cover"
									/>
								</div>
							</button>
							{showDetails === 3 && (
								<Project3
									setShowDetails={setShowDetails}
									onClose={() => setShowDetails(0)}
								/>
							)}
						</li>
						<li>
							<button
								onClick={() => {
									setShowDetails(4);
								}}
							>
								<div className="flex flex-col justify-center h-fit w-auto bg-slate-200 rounded-xl p-4 shadow-xl hover:scale-125 hover:bg-slate-400">
									<div className="text-xl font-bold">
										Old Portfolio - See how far I've come!
									</div>
									<img
										src={OG}
										alt="MKTFY-log"
										className="drop-shadow-xl p-8 h-56 object-cover"
									/>
								</div>
							</button>
						</li>
						{showDetails === 4 && (
							<Project4
								setShowDetails={setShowDetails}
								onClose={() => setShowDetails(0)}
							/>
						)}
					</ul>
				</div>
			</div>
			<div className="text-2xl border-4 p-4 m-4 rounded-2xl">
				<div className="text-2xl font-bold">
					Courses, Degrees, and Professional Experience
				</div>
				<div>
					<div className="text-xl font-semibold ">Courses & Degrees</div>
					<ul>
						<li>Front End Developer Certificate, Launchpad by Vog (2023)</li>
						<li>
							Google UI/UX Professional Design Certificate, Coursera (2022)
						</li>
						<li>Responsive Design Certificate, Free Code Camp</li>
						<li>B.Sc. Civil Engineering University of Alberta (2013)</li>
						<li>B.Ed. Mathematics University of Calgary (2019)</li>
					</ul>
					<div className="text-xl font-semibold">Professional Experience</div>
					<ul>
						<li>
							<div>
								<h2>
									Educator | 2019 - 2022 Calgary Board of Education | Calgary
								</h2>
								Designed and created virtual classroom teaching methodologies
								for middle school Math & Science students during the pandemic.
								Built meaningful relationships with and fostered a positive
								learning environment.
							</div>
						</li>
						<li>
							<h2>Civil Designer | 2015 - 2018 EXP inc. | Calgary</h2>
						</li>
						Provided drafting and design services for complex land development
						projects, implemented innovative practices and staff training, and
						resolved construction issues with the site managers and field
						supervisors.
					</ul>
				</div>
			</div>
			<div className="text-2xl border-4 p-4 m-4 rounded-2xl">
				<button
					onClick={() => {
						setShowDetails(5);
					}}
				>
					Contact Me
				</button>

				{showDetails === 5 && (
					<Contact
						setShowDetails={setShowDetails}
						onClose={() => setShowDetails(0)}
					/>
				)}
			</div>
		</div>
	);
}
