/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Home.css";
import logo from "../img/ParkingLot.jpg";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">Parking Lot Management System</header>
      <div className="logo">
        <img src={logo} width="1000" height="666.4"/>
      </div>
      {/* <img src={logo} width="1250" height="833"/> */}
      <div style={{color: "green"}}>
        General Regulations
      </div>
      <ul>
        <li>For Sedan, $10 per hour</li>
        <li>For SUV, $20 per hour</li>
        <li>For Truck, $30 per hour</li>
      </ul>
    </div>
  );
}
export default Home;
