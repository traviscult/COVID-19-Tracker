import React from 'react';
import axios from "axios"

export default class Search extends React.Component {
    state = {
        states: [],
        counties: [],
        deaths: [],
        active: []
    }

   

    componentDidMount(){
        const state = "North%20Carolina"
        const county = "wake"
        axios.get("https://corona.azure-api.net/country/us/" + state)
        .then(res => {
            console.log("state response", res)
            this.setState({ states: res.data.Province_State})
            console.log(this.state.states)
            axios.get("https://corona.azure-api.net/country/us/" + this.state.states + "/" + county)
            .then(res => {
            console.log("response", res)
            this.setState({ counties: res.data.Admin2 })
            this.setState({deaths: res.data.Deaths})
            this.setState({active: res.data.Active})
            console.log(this.state.counties)
        })
        }
        
    )}


   

    render() {
        return( 
            <div>
            <p>State: {this.state.states}</p>
            <p>County: {this.state.counties}</p>
            <p>Deaths: {this.state.deaths}</p>
            <p>Active Cases: {this.state.active}</p>
            </div>
        )   
    }      
    
}