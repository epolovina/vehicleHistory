import React, { Component } from 'react';
import SearchBar from './searchBar.component';


interface IProps {
}

interface IState {
}

export default class NavBar extends Component<IProps, IState> {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Vehicles<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/addVehicles">Add Vehicles</a>
                        </li>
                        <li className="nav-item">
                            <SearchBar />
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}