import React from 'react';
import { useLottie } from 'lottie-react';
import groovyWalkAnimation from './groovy.json';

import Profile from '../../Assets/profileMoir.jpg';

export default function Home() {
	const style = {
		height: '50%',
	};
	const options = {
		animationData: groovyWalkAnimation,
		loop: true,
	};
	const { View } = useLottie(options, style);
	return (
		<div>
			<div className="flex flex-row h-2/5">
				<div>{View}</div>
				<div className="bg-slate-200 h-96 w-96 rounded-xl shadow-xl">
					<img
						src={Profile}
						alt="profile"
						className="h-80 w-80 grayscale drop-shadow-lg p-10"
					/>
					<div>
						<div className="text-xl">Introduction</div>
					</div>
				</div>
			</div>

			<div className="text-xl">Skills</div>
			<div className=" border-4">
				<div className="text-xl">Projects</div>
				<div>
					<ul className="flex flex-wrap justify-center">
						<li>
							<div className="h-40 w-40 bg-slate-200 rounded-lg m-10">
								<h2>MKTFY - Web Application</h2>
							</div>
						</li>
						<li>
							<div className="h-40 w-40 bg-slate-200 rounded-lg m-10">
								<h2>MKTFY - Marketing Site</h2>
							</div>
						</li>
						<li>
							<div className="h-40 w-40 bg-slate-200 rounded-lg m-10">
								<h2>Movie Search - MERN Stack</h2>
							</div>
						</li>
						<li>
							<div className="h-40 w-40 bg-slate-200 rounded-lg m-10">
								<h2>Old Portfolio</h2>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="text-xl">Education and courses taken in web dev</div>
			<div className="text-xl">Contact Me</div>
		</div>
	);
}
