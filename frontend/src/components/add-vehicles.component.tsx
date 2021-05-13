import axios from 'axios';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';


interface IProps {
}

interface IState {
  make: string;
  model: string;
  year: number;
}

export default class AddVehicles extends Component<IProps & RouteComponentProps, IState> {
  constructor(props) {
    super(props);

    this.onChangeMake = this.onChangeMake.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      make: "",
      model: "",
      year: 0
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let vehicle = this.state;
    axios.post("http://localhost:8080/vehicle", vehicle)
      .then((response) => { console.log(response.data) });
    this.props.history.push("/");
    
  }

  onChangeMake(e) {
    this.setState({ make: e.target.value });
  }
  onChangeModel(e) {
    this.setState({ model: e.target.value });
  }
  onChangeYear(e) {
    this.setState({ year: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Add a new Vehicle</h3>
        <form className="addItemForm" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Make: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.make}
              onChange={this.onChangeMake}
            />
            <label>Model: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.model}
              onChange={this.onChangeModel}
            />
            <label>Year: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeYear}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Vehicle" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}