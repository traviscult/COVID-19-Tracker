import React from 'react';
import axios from "axios";
import Map from './Map';
import CountyDropdown from './CountyDropdown';



export default class StateSearch extends React.Component {
    constructor(){
        super();
        this.state = {
            province: '',
            // county: '',
            // deaths: '',
            // active: '',
            counties: ['']
        }
    }
    
    
     
    //calling state API. If a new state is clicked, the province state updates with that State's name
    async getProvince(province) {
        let res = await axios.get("https://corona.azure-api.net/country/us/" + province);
        let countylist  = res.data.City.map(city => city.City)
        
            this.setState({ 
                province: res.data.Province_State, 
                counties: countylist
            }) 
            console.log("actual county list:", this.state.counties)
        // console.log("state response:", res.data)
        // console.log("state name:", this.state.province)
        // console.log("list of counties:", countylist)
        
    }

    provinceCallback = (province) => {
        // console.log("province", province)
        this.setState({
            province: province,
        })
        this.getProvince(province)
    }

    // countyCallback = (county) => {
    //     this.setState({
    //         county: county
    //     })
    // }

    countylistCallback = (counties) => {
        this.setState({
            counties: counties
        })
    }

    // countyAlert = (event) =>{
    //     let name = event.target.innerHTML
    //     console.log(name)

    // }

    render() {
        return( 
            <div>
            <Map
                province={this.provinceCallback}
                counties={this.countylistCallback}
                county={this.countyCallback}
            />
            <p>State: {this.state.province}</p>
            {/* <p>County: {this.state.county}</p>
            <p>Deaths: {this.state.deaths}</p>
            <p>Active Cases: {this.state.active}</p> */}
            <div id="react-search">
                <p>Counties:</p>
                    <CountyDropdown state={this.state} />
            </div> 
        </div>
        )   
    }      
    
}