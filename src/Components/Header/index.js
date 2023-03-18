import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Header() {
	return (
		<div className="header">
			<nav className="flex flex-row justify-between">
				<Link to="/" className="p-4">
					<div className="text-xl">JM</div>
				</Link>
				<ul className=" flex flex-row gap-10 justify-center content-between p-4">
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
