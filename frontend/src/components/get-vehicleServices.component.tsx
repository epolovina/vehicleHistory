import axios from 'axios';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { RouteComponentProps } from 'react-router';
import RemoveService from './remove-service.component';
import RemoveVehicle from './remove-vehicle.component';


interface IProps {
}

interface IState {
  response: [IResponse]
}

interface IServiceAttribute {
  id?: number,
  vehicleId?: number,
  serviceType?: string,
  date?: string,
  milage?: number,
  nextService?: string,
  createdAt?: string,
  updatedAt?: string,
}

interface IResponse {
  id?: number,
  make?: string,
  model?: string,
  year?: number,
  createdAt?: string,
  updatedAt?: string,
  Services?: [IServiceAttribute]
}

export default class GetVehicleServices extends Component<IProps & RouteComponentProps, IState> {
  constructor(props: any) {
    super(props);

    this.addServicesButtonHandler = this.addServicesButtonHandler.bind(this);
    // this.removeServiceButtonHandler = this.removeServiceButtonHandler.bind(this);

    this.state = {
      response: [{}] as [IResponse]
    }
  }

  addServicesButtonHandler() {
    return (
      <Link to={"/addService/" + this.props.match.params.id} className="btn btn-primary serviceButton">Add a Service</Link>
    )
  }

  componentDidMount() {
    axios.get("http://localhost:8080/service/" + this.props.match.params.id)
      .then((response) => {
        console.log(response.data);
        let res = response.data as [IResponse];
        return res
      })
      .then((result) => {
        this.setState({ response: result })
      });
  }

  renderTable() {
    console.log(this.state.response[0])
    if (this.state.response[0] !== undefined) {
      return this.state.response.map((val, idx) => {
        return (
          <div key={idx.toString()}>
            <h3>{val.year + " " + val.make + " " + val.model}{this.addServicesButtonHandler()}
              <RemoveVehicle id_p={val.id?.toString()} />
            </h3>

            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Service Type</th>
                  <th scope="col">Kilometers</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              {val.Services?.map((service, idx) => {
                return (
                  <tbody key={idx.toString()}>
                    <tr>
                      <td>{service.serviceType}</td>
                      <td>{service.milage}</td>
                      <td><span>{service.date} <RemoveService id_p={service.id?.toString()} /> </span>
                      </td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
          </div>
        )
      });
    } else {
      return (
        <div key="0">
          <h3>{this.addServicesButtonHandler()}</h3>
        </div>
      );

      // return this.state.response.map((val, idx) => {
      //   return (
      //     <div key={idx.toString()}>
      //       <h3>{val.year + " " + val.make + " " + val.model}{this.addServicesButtonHandler()}
      //         <RemoveVehicle id_p={val.id?.toString()} />
      //       </h3>
      //     </div>
      //   );

      // });
      }
  }

  render() {
    return (
      <div>
        {this.renderTable()}
      </div>
    );
  }
}