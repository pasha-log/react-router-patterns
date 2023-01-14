import React from 'react';
import { useParams } from 'react-router-dom';
import './DogDetails.css';

function DogDetails({ dogs }) {
	const { name } = useParams();

	const dog = dogs.filter((dog) => dog.name === name)[0];
	const facts = dog.facts;

	let img = dog.src ? <img src={dog.src} alt={name} /> : null;
	return (
		<div className="Dog-container">
			<div className="Dog-details">
				<h1>This is {name}.</h1>
				<h2>Age: {dog.age}</h2>
				{img}
				<ul>{facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
			</div>
		</div>
	);
}
export default DogDetails;
