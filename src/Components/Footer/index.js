import React from 'react';
import GitHub from '../../Assets/github.svg';
import Linkedin from '../../Assets/linkedin.svg';
import './index.css';

export default function Footer() {
	return (
		<div
			className="flex flex-row gap-10 text-lg p-4 border-2 border-black"
			style={{ backgroundColor: '#dddddd', padding: '3rem' }}
		>
			JM
			<img src={GitHub} alt="git" />
			<img src={Linkedin} alt="linkedin" />
		</div>
	);
}
