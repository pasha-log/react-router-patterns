import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import DogPrint from './dog-print.png';
import './Nav.css';

function Nav() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand>{<img alt="logo" className="Logo" src={DogPrint} />} Dog Finder</Navbar.Brand>
				<NavLink exact to="/dogs">
					Dogs
				</NavLink>
			</Container>
		</Navbar>
	);
}

export default Nav;
