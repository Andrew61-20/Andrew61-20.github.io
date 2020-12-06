import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Navigation from './Navigation.js';
import Home from '../views/Home.js';
import Contacts from '../views/Contacts.js';
import About from '../views/About.js';

export default () => {
	return (
		<div>
			<Navigation />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/contacts" component={Contacts} />
				<Route path="/about" component={About} />
				<Redirect to="/" />
			</Switch>
		</div>
	)
}
	