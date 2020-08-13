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
    
    const mapDiv = document.getElementById('map');
    if(mapDiv.style.visibility === true) map.resize();

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-77.04, 38.907],
        zoom: 9
    });
};



render() {
    return (
        <>
            <div id='map'>map</div>
        </>
    )
}
}
