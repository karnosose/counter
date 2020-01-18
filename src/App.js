import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from "./components/Counter";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  increaseCount = () => {
    this.setState(({count}) => ({
      count: count + 1
    }))
  }

  decreaseCount = () => {
    this.setState(({count}) => ({
      count: count < 1 ? 0 : count -1
    }))
  }

  resetCount = () => {
    this.setState(({count}) => ({
      count: 0
    }))
  }

  render() {
    return (
      <div>
        <div className="counter">{this.state.count}</div>
        <button onClick={this.increaseCount}>Increase</button>
        <button onClick={this.decreaseCount}>decrease</button>
        <button onClick={this.resetCount}>decrease</button>
      </div>
      
    )
  }
}

export default App;
