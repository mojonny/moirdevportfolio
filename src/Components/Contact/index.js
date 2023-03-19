import React from 'react';

import GitHub from '../../Assets/github.svg';
import Linkedin from '../../Assets/linkedin.svg';
import './index.css';

export default function Contact({ setShowDetails }) {
	return (
		<div className="darkBG5" onClick={() => setShowDetails(0)}>
			<div
				className="contact-modal"
				open={true}
				onClick={(e) => e.stopPropagation()}
			>
				all my links and link to my resume
				<img src={GitHub} alt="git" />
				<img src={Linkedin} alt="linkedin" />
				<button onClick={() => setShowDetails(0)}>Close</button>
			</div>
		</div>
	);
}
