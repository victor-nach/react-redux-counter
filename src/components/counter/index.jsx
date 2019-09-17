import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    state = { count: 0 }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render () {
        return (
            <div className='counter'>
            <h2>Counter</h2>
            <div>
                <button onClick={this.decrement}>-</button>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>+</button>
            </div>
            </div>
        )
    }
}

export default Counter