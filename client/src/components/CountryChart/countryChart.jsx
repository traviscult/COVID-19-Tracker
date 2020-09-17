import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios'

const state = {
    labels: ['test','test1'],
    datasets: [
        {
            label: 'Active Cases',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [12,34]
        }
    ]
}


export default class CountryChart extends React.Component {

    
    componentDidMount() {

        axios.get("https://api.covidtracking.com/v1/us/daily.json")
            .then(res => {

                console.log(res.data);
                this.setState({ datasets: res.data })

            })
    };

    render() {

        return (
            <div className="col-9">
                <Line
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'United States Trend Chart',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>

        );

    }
}