import React from 'react';
import './index.css';

export default function Project3({ setShowDetails }) {
	return (
		<div className="darkBG" onClick={() => setShowDetails(0)}>
			<div
				className="project-modal1"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				Movie Search MERN-Stack Project @
				https://movie-reviews-client.onrender.com/ Created a movie search
				application using a MongoDB sample collection and a mobile-first
				responsive design (Tailwind CSS)
				<button onClick={() => setShowDetails(0)}>Close</button>
			</div>
		</div>
	);
}
