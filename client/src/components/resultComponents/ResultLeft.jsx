import React from 'react';
import './result.css';
import axios from "axios";

export default class ResultLeft extends React.Component {
  state = {
    source: [],
    title: [],
    author: [],
    url: []
  }

  componentDidMount() {
    const APIKey = "161d83da2a6f45d5a125daa9f91abfae";

    const dt = new Date();

    const year = dt.getFullYear();
    const month = (dt.getMonth()).toString().padStart(2, "0");
    const day = dt.getDate().toString().padStart(2, "0");
    //set last date for API to call from
    const lastMonth = year + '-' + month + '-' + day

    console.log(year + '/' + month + '/' + day);
    // const county = "wake"
    axios.get("https://newsapi.org/v2/top-headlines?q=coronavirus&from=" + lastMonth + "&language=en&apiKey=" + APIKey)
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
      <div>
        {this.state.source.map((article, idx) => {
          if (idx < 10) {
            return (
              <div className="card">
                <p>Source: {article.source.name}</p>
                <p>Title: <a href={article.url} target="blank">{article.title}</a></p>
                <p>{article.description}</p>
              </div>
            )
          }
        })}
      </div>
    )
  }
}
