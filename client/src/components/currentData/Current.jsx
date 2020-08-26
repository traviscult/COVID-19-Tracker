import React from 'react';
import './Current.css';
import axios from "axios";

export default class CurrentData extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get("https://api.covidtracking.com/v1/us/current.json")
            .then(res => {
                console.log(res.data[0]);
                this.setState({ data: res.data[0] })
            })
    }

    render() {
        return (
            <>
                <div className="container row dataCol">
                    <div className="col-sm-12 col-md-12" id="currentOne">
                        <h5 className="dataTitle">Current US Data</h5>
                        <p>Current Hospitalized: {this.state.data.hospitalizedCurrently}</p>
                        <p>Current ICU: {this.state.data.inIcuCurrently}</p>
                        <p>Current Ventailator: {this.state.data.onVentilatorCurrently}</p>
                    </div>
                    <div className="col-sm-12 col-md-12" id="cummulativeOne">
                        <h5 className="dataTitle">Cummulative US Data</h5>
                        <p>Total Deaths: {this.state.data.death}</p>
                        <p>Total Hospitalized: {this.state.data.hospitalizedCumulative}</p>
                        <p>Total Positive Cases: {this.state.data.positive}</p>
                        <p>Total Negative Cases: {this.state.data.negative}</p>
                    </div>
                    </div>
            </>
        )
    }
}