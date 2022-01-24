import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/SplashPage.css';

export default function SplashPage() {
	return (
		<div className="SplashPage">
			<h1>Welcome to my app.</h1>
			<h2>
				Please <Link to="/login">login</Link> to continue!
			</h2>
		</div>
	);
}
