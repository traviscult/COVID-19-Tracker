import React from 'react';
import axios from "axios";
import Map from './Map';
import CountyDropdown from './CountyDropdown';

export default class StateSearch extends React.Component {
    constructor(){
        super();
        this.state = {
            province: '',
            counties: ['']
        };
    };
    
    async getProvince(province) {
     let res = await axios.get("https://corona.azure-api.net/country/us/" + province);
     let countylist  = res.data.City.map(city => city.City);
        this.setState({ 
                province: res.data.Province_State, 
                counties: countylist
        });
        console.log("actual county list:", this.state.counties);    
    }

    provinceCallback = (province) => {
        this.setState({
            province: province,
        });
        this.getProvince(province);
    }

    countylistCallback = (counties) => {
        this.setState({
            counties: counties
        });
    };

    render() {
        return( 
            <div>
            <Map
                province={this.provinceCallback}
                counties={this.countylistCallback}
            />
            <p>State: {this.state.province}</p>
            <div id="react-search">
                <p>Counties:</p>
                    <CountyDropdown state={this.state} />
            </div> 
        </div>
        )   
    }         
}