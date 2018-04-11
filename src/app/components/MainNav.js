import React from "react";
import { Link } from 'react-router-dom';
import { URL_ALL_NEWS, URL_HOME } from '../constants/urls';

export const MainNav = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<ul className="navbar-nav">
					<li className="nav-item">
            <Link to={URL_HOME} className="nav-link">Home</Link>
					</li>
					<li className="nav-item">
						<Link to={URL_ALL_NEWS} className="nav-link">News</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};