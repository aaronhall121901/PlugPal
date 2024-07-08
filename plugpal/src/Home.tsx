import React from "react";
import "./Home.css";
import logo from "./assets/pp_logo.png";

const Home = () => {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="PlugPal">PlugPal</div>
      <div className="img">
        <img src={logo} alt="PlugPal Logo"></img>
      </div>
      <div className="card">
        <div className="container">
          <div className="cat">
            <i className="fas fa-search"></i> Search
          </div>
          <p>Find charging stations near you.</p>
        </div>
      </div>
      <div className="card">
        <div className="container">
          <div className="cat">
            <i className="fas fa-heart"></i> Favorites
          </div>
          <p>Your favorite chargers.</p>
        </div>
      </div>
      <div className="card">
        <div className="container">
          <div className="cat">
            <i className="fas fa-bars"></i> Settings
          </div>
          <p>Update your preferences.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
