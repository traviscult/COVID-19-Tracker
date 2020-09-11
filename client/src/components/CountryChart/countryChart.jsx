import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios'




export default class CountryChart extends React.Component {

    state = {
        labels: [],
        dataPoint: []
    }
    componentDidMount() {

        axios.get("https://api.covidtracking.com/v1/us/daily.json")
            .then(res => {

                console.log("data", res.data);
                this.setState({ dataPoint: res.data })

            })
    };

    render() {

        return (
            <div className="col-9">
                <Line
                    // data={dataPoint.datasets.data}
                    // options={{
                    //     title: {
                    //         display: true,
                    //         text: 'United States Trend Chart',
                    //         fontSize: 20
                    //     },
                    //     legend: {
                    //         display: true,
                    //         position: 'right'
                    //     }
                    // }}
                />
            </div>

        );

    }
}