import React from 'react';
import './index.css';

export default function Project2({ setShowDetails }) {
	return (
		<div className="darkBG" onClick={() => setShowDetails(0)}>
			<div
				className="project-modal1"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				MKTFY Marketing Site @ https://mktfy-marketing-site.vercel.app/
				Programmed a static marketing site for the MKTFY web app using next.js,
				and Tailwind CSS
				<button onClick={() => setShowDetails(0)}>Close</button>
			</div>
		</div>
	);
}
