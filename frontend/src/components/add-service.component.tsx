import axios from 'axios';
import React, { Component } from 'react';
import {RouteComponentProps} from 'react-router';


interface IProps {
}

interface IState {
  vehicleId: number;
  serviceType: string;
  milage: string;
  date: string;
}

export default class AddVehicleService extends Component<IProps & RouteComponentProps,IState> {
  constructor(props) {
    super(props);

    this.onChangeServiceType = this.onChangeServiceType.bind(this);
    this.onChangeMilage = this.onChangeMilage.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      vehicleId: this.props.match.params.id,
      serviceType: "",
      milage: "",
      date: ""
    }
  }

  // componentDidMount() {
    // console.log(this.props.match)
    // let vehicleId = window.location.pathname.split("/service/")[1];
    // console.log("Vehicle ID: " + vehicleId);
    // this.setState({vehicleId: Number(vehicleId)});
  // }

  onSubmit(e) {
    e.preventDefault();
    let service = this.state;
    axios.post("http://localhost:8080/service", service)
      .then((response) => {console.log(response.data)});
    this.props.history.push("/service/" + this.state.vehicleId)
  }

  onChangeServiceType(e) {
    this.setState({serviceType: e.target.value});
  }
  onChangeMilage(e) {
    this.setState({ milage: e.target.value });
  }
  onChangeDate(e) {
    this.setState({ date: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Add a new service log</h3>
        <form className="addItemForm" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Service Type: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.serviceType}
              onChange={this.onChangeServiceType}
            />
            <label>Kilometers: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.milage}
              onChange={this.onChangeMilage}
            />
            <label>Date: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Update Service" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}