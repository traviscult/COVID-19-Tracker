import React from 'react';
import './result.css';
import axios from "axios";

const dotenv = require('dotenv');
const env = dotenv.config().parsed;

export default class ResultLeft extends React.Component {
  state = {
    source: [],
    title: [],
    author: [],
    url: []
  }

  componentDidMount() {
    const APIkey = process.env.REACT_APP_API_KEY

    const dt = new Date();

    const year = dt.getFullYear();
    const month = (dt.getMonth()).toString().padStart(2, "0");
    const day = dt.getDate().toString().padStart(2, "0");
    //set last date for API to call from
    const lastMonth = year + '-' + month + '-' + day

    console.log(APIkey);
    // const county = "wake"
    axios.get("https://newsapi.org/v2/top-headlines?q=coronavirus&from=" + lastMonth + "&language=en&apiKey=" + APIkey)
      .then(res => {

        console.log("response", res.data.articles)
        this.setState({ source: res.data.articles })
        // this.setState({ title: res.data.articles[i].title })
        // this.setState({author: res.data.articles[i].author})
        // this.setState({source: res.data.articles[i].source.name})
        // this.setState({url: res.data.articles[i].url})
        console.log(this.state.source)
        // }
      })
  };

  render() {
    return (
      <>
        {this.state.source.map((article, idx) => {
          if (idx < 10) {
            return (
              <div className="col-sm-12 col-md-5 newsCol">

                <p className="newsSource" key={idx}><span className="newsTitle"> Source:</span> {article.source.name}</p>
                <p><span className="newsTitle"> Title:</span> <a href={article.url} target="_blank" rel="noopener noreferrer" className="newsTitleLine">{article.title}</a></p>
                <p className="newsDescription">{article.description}</p>
              </div>
            )
          }
        })}
      </>
    )
  }
}
