import React from 'react';
import axios from "axios";

export default class CountyDropdown extends React.Component{
    constructor(){
        super();
        this.state = {
            value: '',
            deaths: '',
            active: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange (event) {
        this.setState({value: event.target.value});
    };

   handleSubmit = (event) => {
        event.preventDefault();
        this.getCounty(this.state.value)
    };
  
    async getCounty(value) {
        let province = this.props.state.province;
        console.log(province);
        let res = await axios.get("https://corona.azure-api.net/country/us/" + province + "/" + value);
            this.setState({ 
                deaths: res.data.Deaths,
                active: res.data.Active
            });
        console.log("deaths", this.state.deaths);
        console.log("active", this.state.active);
    };

    render(){
    let counties = this.props.state.counties
    let countyoptions = counties.map((county, i) =>
    <option value={county} key={i}>{county}</option>);
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
        <label> Choose a County: <br />
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="" selected="defaultValue">Select from here...</option>
                    {countyoptions}
             </select>
            <input type="submit" value="Submit" className="stateSubmitBtn" ></input>
        </label> 
        </form>
        <p>County: {this.state.value}</p>
           <p>Deaths: {this.state.deaths}</p>
        <p>Active Cases: {this.state.active}</p>
        </div>
        )
    }
}
