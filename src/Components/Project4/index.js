import React from 'react';
import './index.css';

export default function Project4({ setShowDetails }) {
	return (
		<div className="darkBG" onClick={() => setShowDetails(0)}>
			<div
				className="project-modal1"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				After a few weeks of exploring web development, I made this portfolio to
				get out on the market as soon as possible. This site uses vanilla js,
				html, and css.
				<button onClick={() => setShowDetails(0)}>Close</button>
			</div>
		</div>
	);
}
