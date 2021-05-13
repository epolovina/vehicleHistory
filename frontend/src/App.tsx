import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddVehicles from "./components/add-vehicles.component";
import GetVehicleServices from "./components/get-vehicleServices.component";
import GetVehicles from "./components/get-vehicles.component";
import AddVehicleService from './components/add-service.component';
import NavBar from './components/navbar.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" component={GetVehicles} exact/>
        <Route path="/addVehicles" component={AddVehicles}/>
        <Route path="/service/:id" component={GetVehicleServices}/>
        <Route path="/addService/:id" component={AddVehicleService}/>
      </Router>
    </div>
  );
}

export default App;
