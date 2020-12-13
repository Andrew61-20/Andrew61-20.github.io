import React from "react";
// import * as API from "../services/api.js";
import UserList from '../components/UserList.js';
import ActiveUser from '../components/ActiveUser.js';
import SearchBar from '../components/SearchBar.js';
import RemChanAdd from '../components/RemChanAdd.js';

export default ({term, initialData, updateData, data, active, loadData}) => {
   
        return (
            <div className="app container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <SearchBar
                            term={term}
                            initialdata={initialData}
                            update={updateData}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <RemChanAdd 
                            data={data}
                            active={active}
                            update={updateData}
                            load={loadData}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-3 col-lg-2">
                        <ActiveUser data={data} active={active} />
                    </div>
                    <div className="col-sm-8 col-md-9 col-lg-10">
                        <UserList data={data} update={updateData} />
                    </div>
                </div>
            </div>
        )
    }

