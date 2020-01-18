import React, {Component} from "react";
import "./Counter.css"

export class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    render(){
        return (
            <div className="counter">{this.state.counter}</div>
        )
    }
}

