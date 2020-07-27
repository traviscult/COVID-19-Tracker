import React from 'react';
import axios from "axios";
import Map from './Map'


export default class Search extends React.Component {
    
    state = {
        province: '',
        county: '',
        deaths: '',
        active: '',
        counties: ['']
    }

    async componentDidUpdate(){
        this.getProvince();
        // this.getCounty();
    }
        
    //calling state API. If a new state is clicked, the province state updates with that State's name
    async getProvince() {
        let res = await axios.get("https://corona.azure-api.net/country/us/" + this.state.province);
        let countylist  = res.data.City.map(city => city.City)
        if (res.data.Province_State !== this.state.province){
            this.setState({ 
                province: res.data.Province_State, 
                counties: res.data.City.map(city => city.City)
            }) 
         
        }
        console.log("state response:", res.data)
        console.log("state name:", this.state.province)
        console.log("list of counties:", countylist)
        console.log("actual county list:", this.state.counties)
     

    }



    provinceCallback = (province) => {
        this.setState({
            province: province,
        })
    }

    countyCallback = (county) => {
        this.setState({
            county: county
        })
    }

    countylistCallback = (counties) => {
        this.setState({
            counties: counties
        })
    }




    render() {
        return( 
            <div>
            <Map
                province={this.provinceCallback}
                counties={this.countylistCallback}
                county={this.countyCallback}    
            />
            <p>State: {this.state.province}</p>
            <p>County: {this.state.county}</p>
            <p>Deaths: {this.state.deaths}</p>
            <p>Active Cases: {this.state.active}</p>
            <p>Counties:</p>
            </div>
        )   
    }      
    
}