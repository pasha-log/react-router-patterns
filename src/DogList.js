import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

const DogList = ({ names }) => {
	return (
		<div className="Dogs">
			<ul className="Dog-list">
				{names.map((name) => (
					<li key={name}>
						<Link to={`/dogs/${name}`}>{name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DogList;
