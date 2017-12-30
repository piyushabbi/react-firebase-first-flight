import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    database.ref('/').on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          One day, some data from Firebase will go here.
          <h2>{ this.state.data == null ? 'Loading...' : this.state.data }</h2>
        </pre>
      </div>
    );
  }
}

export default App;
