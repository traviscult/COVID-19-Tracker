import React from 'react';
import './Current.css';
import axios from "axios";

export default class CurrentData extends React.Component {

componentDidMount() {
    axios.get("https://api.covidtracking.com/v1/us/current.json")
    .then(res => {
      console.log(res.data[0])
    })
  }

  render() {
      return(
          <>
          
          </>
      )
  }
}