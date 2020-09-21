import React from 'react';
// import StateDropdown from './dropdown';
// import './Current.css';
import axios from "axios";

export default class StateData extends React.Component {
    state = {
        data: []
    }
     componentDidMount() {
        let stateSelected = "NC";

        axios.get("https://api.covidtracking.com/v1/states/" + stateSelected + "/current.json")
            .then(res => {
                console.log(res.data);
                this.setState({ data: res.data })
            })
    }

    async getCounty(value) {
        // let stateSelected = this.props.state.province;
        let res = await axios.get("https://api.covidtracking.com/v1/states/" + value + "/current.json");
        this.setState({
          data: res.data
        });
      }

    render() {
        return (
            <>
                <div id="test">
                    <h5 className="dataTitle">{this.state.data.state} Data</h5>
                    <p>Total Tests: {this.state.data.totalTestResults}</p>
                    <p>Positive Cases: {this.state.data.positive}</p>
                    <p>Negative Tests: {this.state.data.negative}</p>
                    <p>Currently Hospitalized: {this.state.data.hospitalizedCurrently}</p>
                    <p>Deaths: {this.state.data.death}</p>
                </div>
                <p className="disclosure">Disclosure: All data is sourced from The COVID Tracking Project and is up-to-date as of {this.month}/{this.date}/{this.year}. Please note that not all testing is reported and numbers may slightly vary from CDC data. </p>
            </>
        )
    }
}