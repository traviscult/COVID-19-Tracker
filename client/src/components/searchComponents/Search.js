import React from 'react';
import axios from "axios"

export default class Search extends React.Component {
    state = {
        states: [],
        counties: [],
        deaths: [],
        active: []
    }

    async componentDidUpdate(){
        this.getData();
    }
        
    
    async getData() {
        const county = "wake";
        let res = await axios.get("https://corona.azure-api.net/country/us/" + this.state.provinces + "/" + county);
        if (res.data.Province_State !== this.state.provinces){
            this.setState({ 
                county: res.data.City, 
                deaths: res.data.Deaths,
                active: res.data.Active,
                provinces: res.data.Province_State 
            })
        }

    }


    provinceCallback = (province) => {
        this.setState({
            provinces: province,
        })
    }

    countyCallback = (county) => {
        this.setState({
            county: county
        })
    }
    


    render() {
        return( 
            <div>
            <Map
                province={this.provinceCallback}
                county={this.countyCallback}
            />
            <p>State: {this.state.provinces}</p>
            <p>County: {this.state.county}</p>
            <p>Deaths: {this.state.deaths}</p>
            <p>Active Cases: {this.state.active}</p>
            </div>
        )   
    }  
}