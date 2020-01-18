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

  render() {
    return (
      <div>
        <div className="counter">{this.state.count}</div>
        <button onClick={this.increaseCount}>Increase</button>



      </div>
      
    )
  }
}

export default App;
