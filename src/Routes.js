import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DogDetails from './DogDetails';
import DogList from './DogList';

const Routes = ({ dogs }) => {
	const names = dogs.map((dog) => dog.name);
	return (
		<Switch>
			<Route exact path="/dogs">
				<DogList names={names} />
			</Route>
			<Route path="/dogs/:name">
				<DogDetails dogs={dogs} />
			</Route>
			<Redirect to="/dogs" />
		</Switch>
	);
};

export default Routes;
