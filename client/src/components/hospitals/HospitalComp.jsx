import React from 'react';
import './hospital.css';
import axios from "axios";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


export default class HospitalsPage extends React.Component {
    
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoiam95Y2hlbjUwNjkiLCJhIjoiY2tkc3ZsMWp0MG1hMTJybnhpNW9wbDh3NyJ9.7jiZP4oIoTlXI--KIOjT5A'

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        }

        const showPosition = (position) => {
            const userLat = position.coords.latitude.toFixed(2);
            const userLon = position.coords.longitude.toFixed(2);
            console.log(userLat, userLon)

            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [userLon, userLat],
                zoom: 10
            });

            map.addControl(
                new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
                })
                );
        }
        getLocation()
    };



    render() {
        return (
            <>
                <div className="col">
                    <div id='map'>map</div>
                </div>
            </>
        )
    }
}
