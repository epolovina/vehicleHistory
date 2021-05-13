import axios from 'axios';
import React, { Component } from 'react';


interface IResponse {
  id?: number,
  make?: string,
  model?: string,
  year?: number,
  createdAt?: string,
  updatedAt?: string
}
interface IProps {
}

interface IState {
  response: [IResponse],
  containerId: string
}

export default class GetVehicles extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      response: [{}],
      containerId: ""
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/vehicle")
      .then((response) => {
        console.log(response.data);
        let res = response.data as [IResponse];
        this.setState({ response: res });
      });
  }

  render() {
    return (
      <div>
        {
          this.state.response.map((val, idx) => {
            return (
              <h2 id={val.id?.toString()} key={idx.toString()}>
                <a href={"/service/"+ val.id?.toString()}>
                  {val.year + " " + val.make + " " + val.model}
                </a>
              </h2>
            );
          })
        }
      </div>
    );
  }
}