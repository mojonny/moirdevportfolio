import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Header() {
	return (
		<div
			className="header"
			style={{ backgroundColor: '#dddddd', padding: '3rem' }}
		>
			<nav className="flex flex-row justify-between items-center">
				<Link to="/">
					<div className="text-4xl font-bold">JM</div>
				</Link>
				<ul className=" flex flex-row gap-10 justify-center content-between">
					<li>
						<Link to="/">{`<Home />`}</Link>
					</li>
					<li>
						<Link to="/learninglab">{`<Learning Lab />`}</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
