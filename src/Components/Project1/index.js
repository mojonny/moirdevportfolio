import React from 'react';
import './index.css';

export default function Project1({ setShowDetails }) {
	return (
		<div className="darkBG1" onClick={() => setShowDetails(0)}>
			<div
				className="project1-modal"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				MKTFY Web Application @ https://mktfy-moir.vercel.app/home Developed a
				Kijiji-like app using Reactjs, React Router v6, Redux Toolkit, Postman &
				Swagger for API testing, and embedded Auth0 authentication
				<button onClick={() => setShowDetails(0)}>Close</button>
			</div>
		</div>
	);
}
