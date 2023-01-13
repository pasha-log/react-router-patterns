import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<NavLink exact to="/dogs">
				Dogs
			</NavLink>
			{/* <NavLink exact to="/dogs/:name">
				
			</NavLink> */}
		</nav>
	);
}

export default Nav;
