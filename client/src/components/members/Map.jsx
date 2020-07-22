import React, { Component } from 'react';
import './map.css'
import USAMap from "react-usa-map";
import StatesList from './StatesList';

class Map extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  statesFilling = () => {
    return {
      "NC": {
        fill: "#adadad",
        clickHandler: () => alert("Custom callback for the North Carolina")
      }
    };
  };

  render() {
    return (
      <>

        <StatesList />

        <div className="d-flex justify-content-center align-items-center mapCol">
          <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
        </div >
      </>
    );

  }
}

export default Map;