import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState(prevState=>({
      count:prevState.count +1
    }));
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button id='inc' onClick={this.increment}>Incrementa</button>
      </div>
    );
  }
}

export default App;
