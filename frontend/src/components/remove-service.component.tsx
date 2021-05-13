import axios from 'axios';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';


interface IProps {
  id_p: number
}

interface IState {
}

export default class RemoveService extends Component<IProps & RouteComponentProps, IState> {
  constructor(props: any) {
    super(props);

    this.removeServiceButtonHandler = this.removeServiceButtonHandler.bind(this);
  }

  removeServiceButtonHandler() {
    axios.delete("http://localhost:8080/service/" + this.props.id_p)
      .then((response) => {
        window.location.reload();
      })
  }

  render() {
    return (
        <button className="btn btn-danger serviceButton"
          onClick={this.removeServiceButtonHandler} >
            Remove
        </button>
    )
  }
}
