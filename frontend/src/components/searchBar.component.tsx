import React, { Component } from 'react';


interface IProps {
    // keyword: string,
    // setKeyword: (e: any) => void
}

interface IState {
}

export default class SearchBar extends Component<IProps, IState> {

    constructor(props: any) {
        super(props);
    }

    searchBar() {
        const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
        return (
            <input
                style={BarStyling}
                key="random1"
                // value={this.props.keyword}
                placeholder={"Search Vehicles"}
                // onChange={(e) => this.props.setKeyword(e.target.value)}
            />
        );
    }

    render() {
        return (
            this.searchBar()
        );
    }
}