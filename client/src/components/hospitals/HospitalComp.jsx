import React from 'react';
import './hospital.css';
import axios from "axios";
import mapboxgl from 'mapbox-gl'

//const dotenv = require('dotenv');
//const env = dotenv.config().parsed;

export default class HospitalsPage extends React.Component {
    //   state = {
    //     source: [],
    //     title: [],
    //     author: [],
    //     url: []
    //   }
   

componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam95Y2hlbjUwNjkiLCJhIjoiY2tkc3ZsMWp0MG1hMTJybnhpNW9wbDh3NyJ9.7jiZP4oIoTlXI--KIOjT5A'
    
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } 
      }
      
      function showPosition(position) {
          const userLat = position.coords.latitude.toFixed(2);
          const userLon = position.coords.longitude.toFixed(2);
        console.log(userLat, userLon) 
      

 

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [userLon, userLat],
        zoom: 10
    });
   
}
   getLocation()     
};



render() {
    return (
        <>
        <div className="col-9">
            <div id='map'>map</div>
            </div>
        </>
    )
}
}
