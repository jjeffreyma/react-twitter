import React, { Component } from 'react';
import SearchBar from './components/search_bar.js';
import TweetList from './components/tweet_list.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      tweets: [],
      response: {}
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  fetchTweets(string) {
    const url = '/search?q=' + string;

    fetch(url, {
      method: 'get'
    }).then(res => {
      return res.json();
    }).then(data => {
      this.setState({ 
        tweets: data.data.statuses,
        response: data.resp.headers
      });
    }).catch(err => {
      console.log(err);
    });
  }

  handleSearchSubmit(string) {
    this.setState({ searchString: string });
    this.fetchTweets(string);
  }

  render() {
    return (
        <div className="App">
          <h1>{'React Twitter Search'}</h1>
          <SearchBar
            searchString={this.state.searchString}
            handleSearchSubmit={this.handleSearchSubmit}
          />
          {this.state.searchString && (
            <div className="status">
              {'Seaches left within current 15 minute window: ' + this.state.response['x-rate-limit-remaining']}
            </div>
          )}
          {this.state.tweets ? (
            this.state.tweets.length !== 0 ? (
              <div>
                <h2>{this.state.searchString}</h2>
                <TweetList tweets={this.state.tweets}/>
              </div>
            ) : (
              <div>Submit a search...</div>
            )
          ) : (
            <div>Error!</div>
          )}
        </div>
    );
  }
}

export default App;
