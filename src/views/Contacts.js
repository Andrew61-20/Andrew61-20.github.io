import React, {Component} from "react";
import * as API from "../services/api.js";
import UserList from '../components/UserList.js';
import ActiveUser from '../components/ActiveUser.js';
import SearchBar from '../components/SearchBar.js';
import RemChanAdd from '../components/RemChanAdd.js';

export default class Contacts extends Component {
    
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
        const {data, term, active} = this.state
        return (
            <div className="app container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <SearchBar
                            term={term}
                            data={this.initialData}
                            update={this.updateData.bind(this)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <RemChanAdd 
                            data={data}
                            active={active}
                            update={this.updateData.bind(this)}
                            load={this.loadData.bind(this)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-3 col-lg-2">
                        <ActiveUser data={data} active={active} />
                    </div>
                    <div className="col-sm-8 col-md-9 col-lg-10">
                        <UserList data={data} update={this.updateData.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

