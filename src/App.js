import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };
    // Event Bindings
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this)
  }
  componentDidMount() {
    database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    });
  }
  submitHandler(e) {
    e.preventDefault();
    database.ref().child('AMAZINGDATA').set(this.state.newData);
  }
  changeHandler(e) {
    const newData = e.target.value;
    this.setState({
      newData
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          One day, some data from Firebase will go here.<br />
          { JSON.stringify(this.state.data, null, 2) }
        </pre>
        <form className="App-form" onSubmit={this.submitHandler}>
          <input 
            type="text" 
            onChange={this.changeHandler} 
            value={this.state.newData} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
