import axios from 'axios';
import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';


interface IProps {
  id_p: number
}

interface IState {
}

class RemoveVehicle extends Component<IProps & RouteComponentProps, IState> {
  constructor(props: any) {
    super(props);

    this.removeServiceButtonHandler = this.removeServiceButtonHandler.bind(this);
  }

  removeServiceButtonHandler() {
    axios.delete("http://localhost:8080/vehicle/" + this.props.id_p)
      .then((response) => {
        console.log(response);
      })
    this.props.history.push("/");
  }

  render() {
    return (
      <button className="btn btn-danger serviceButton"
        onClick={this.removeServiceButtonHandler} >
        Remove Car
      </button>
    )
  }

}

export default withRouter(RemoveVehicle);
