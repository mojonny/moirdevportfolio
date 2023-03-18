import React from 'react';
import GitHub from '../../Assets/github.svg';
import Linkedin from '../../Assets/linkedin.svg';
import './index.css';

export default function Footer() {
	return (
		<div className="footer">
			JM github linkedin
			<img src={GitHub} alt="git" />
			<img src={Linkedin} alt="linkedin" />
		</div>
	);
}
