import React, { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
	const squareVariants = {
		visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
		hidden: { opacity: 0, scale: 0 },
	};

	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

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

	return (
		<div style={{ boxSizing: 'border-box' }}>
			<div className="flex flex-row gap-40 justify-center items-center p-20 ">
				<div className=" flex flex-col justify-center bg-slate-200 rounded-xl shadow-xl p-8 ">
					<div className="font-bold">JON MOIR</div>
					<div>{View}</div>
					<div className=" font-bold p-5 drop-shadow-xl">
						FRONT END DEVELOPER
					</div>
					<h3>development/design/deployment</h3>
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

			<div className="text-xs border-4 m-4 rounded-2xl">
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={squareVariants}
					className="mx-auto my-96 max-w-screen-md bg-slate-200 rounded-2xl shadow-2xl relative"
				>
					<div className="font-bold p-2">Skills</div>

					<ul className="text-left px-20 pb-6 list-disc">
						<li>
							Knowledgeable in React.js, Redux, Next.js, Express, Tailwind,
							Bootstrap, Styled Components, Material UI, ChakraUI, and Ant
							Design
						</li>
						<li>
							Understanding of Agile development methodologies and CI/CD
							pipelines
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
				</motion.div>
			</div>

			<div className="border-4 m-4 rounded-2xl h-fit p-10">
				<div className=" p-4">Projects</div>
				<div className="mx-40">
					<ul className="flex flex-wrap gap-20">
						<li>
							<button
								onClick={() => {
									setShowDetails(1);
								}}
							>
								<div
									className="flex flex-col justify-center bg-slate-200 rounded-xl shadow-xl hover:scale-125 hover:bg-slate-400"
									style={{ width: '20vw', minHeight: '15vh' }}
								>
									<div className="text-xl font-bold p-4">
										MKTFY - Web Application
									</div>

									<img
										src={MKTFY}
										alt="MKTFY-log"
										className="p-8 object-cover rounded-xl drop-shadow-xl"
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
								<div
									className="flex flex-col justify-center bg-slate-200 rounded-xl shadow-xl hover:scale-125 hover:bg-slate-400"
									style={{ width: '20vw', minHeight: '15vh' }}
								>
									<div className="text-xl font-bold p-4">
										MKTFY - Marketing Site
									</div>

									<img
										src={MKTFYalt}
										alt="MKTFY-log"
										className="drop-shadow-xl p-8 object-cover -z-1"
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
								<div
									className="flex flex-col justify-center bg-slate-200 rounded-xl shadow-xl hover:scale-125 hover:bg-slate-400"
									style={{ width: '20vw', minHeight: '15vh' }}
								>
									<div className="text-xl font-bold p-4">
										Movie Search - MERN-Stack Project
									</div>

									<img
										src={MERN}
										alt="MERN project"
										className="drop-shadow-xl p-8 object-cover"
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
								<div
									className="flex flex-col justify-center bg-slate-200 rounded-xl shadow-xl hover:scale-125 hover:bg-slate-400 "
									style={{ width: '20vw', minHeight: '15vh' }}
								>
									<div className="text-xl font-bold p-4">
										Old Portfolio - See how far I've come!
									</div>

									<img
										src={OG}
										alt="MKTFY-log"
										className="drop-shadow-xl p-8 object-cover"
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
			<div className="text-xs border-4 m-4 rounded-2xl p-20">
				<motion.div
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={squareVariants}
					className="mx-auto my-96 max-w-screen-lg bg-slate-200 rounded-2xl shadow-2xl relative"
				>
					<div className="font-bold">
						Courses, Degrees, and Professional Experience
					</div>
					<div>
						<div className="font-semibold ">Courses & Degrees</div>
						<ul className="text-left px-20 pb-6 list-disc">
							<li>Front End Developer Certificate, Launchpad by Vog (2023)</li>
							<li>
								Google UI/UX Professional Design Certificate, Coursera (2022)
							</li>
							<li>Responsive Design Certificate, Free Code Camp</li>
							<li>B.Sc. Civil Engineering University of Alberta (2013)</li>
							<li>B.Ed. Mathematics University of Calgary (2019)</li>
						</ul>
						<div className="font-semibold">Professional Experience</div>
						<ul className="text-left px-20 pb-6 list-disc">
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
				</motion.div>
			</div>
			<div className="border-4 p-4 m-4 rounded-2xl h-[900]">
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
