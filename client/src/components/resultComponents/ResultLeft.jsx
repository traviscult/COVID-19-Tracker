import React from 'react';
import './result.css';
import axios from "axios"

export default class ResultLeft extends React.Component {
  state = {
      source: [],
      title: [],
      author: [],
      url: []
  }

 
  componentDidMount(){
      const APIKey = "161d83da2a6f45d5a125daa9f91abfae"
      // const county = "wake"
      axios.get("https://newsapi.org/v2/top-headlines?q=coronavirus&from=2020-06-25&language=en&apiKey=" + APIKey)
      .then(res => {
          // for (let i = 0; i < 5; i++) {
            // const element = array[i];
            
          
          console.log("response", res.data.articles)
          this.setState({source: res.data.articles})
          // this.setState({ title: res.data.articles[i].title })
          // this.setState({author: res.data.articles[i].author})
          // this.setState({source: res.data.articles[i].source.name})
          // this.setState({url: res.data.articles[i].url})
          // console.log(this.state.source)
        // }
      })
      };
      
//  articles = { source, title, author, url }

  render() {
      return( 
          <div>
           
              {this.state.source.map((article, idx) => {
                if (idx<10) {
                  return (
                <div className="card">
                <p>Source: {article.source.name}</p>
                <p>Title: <a href={article.url} target="blank">{article.title}</a></p>
                <p>{article.description}</p>
                </div>
              )}
            })}
          
      
          </div>
      )  
  } 
  }      



// export default ResultLeft