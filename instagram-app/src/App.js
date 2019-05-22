import React, { Component } from 'react';
import './App.css';
// import CommentSection from './components/CommentSection/CommentSection.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
// import PropTypes from 'prop-types';
// import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaPosts: []
    };
  }

  componentDidMount() {
    this.getPosts('https://swapi.co/api/people/')
  }

  getPosts = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ instaPosts: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        < SearchBar />
        < PostContainer thePosts={this.state.instaPosts} />
      </div>
    );
  }
}

export default App;

/* 
If you want your app to work offline and load faster, you can change
 unregister() to register() below. Note this comes with some pitfalls.

 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


 */