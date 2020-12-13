import React, {Component} from "react";
import * as API from "../services/api.js";
import {Switch, Route, Redirect} from "react-router-dom";
import Navigation from './Navigation.js';
import Home from '../views/Home.js';
import Contacts from '../views/Contacts.js';
import About from '../views/About.js';

export default class App extends Component {

	state = {
	    users: [],
        data: null,
        term: "",
        active: 0
    };

    componentDidMount () {
        this.loadData()
    };
 
    loadData() {
        API.getAllUsersItems().then(users => {
            this.initialData = users;
            this.setState({
                data: this.initialData
            })
        })
    };

    updateData(config) {
        this.setState(config)
    };
	render () {
		return (
			<div>
				<Navigation />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/contacts" render={() =>
						<Contacts term={this.state.term} 
								  initialData={this.initialData}
								  updateData={this.updateData.bind(this)} 
								  data={this.state.data}
								  active={this.state.active}
								  loadData={this.loadData.bind(this)}/>} />
					<Route path="/about" component={About} />
					<Redirect to="/" />
				</Switch>
			</div>
		)
	}
}
	