import React, { Component } from 'react';
import { connect } from 'react-redux';
import './counter.css';

class Counter extends Component {
    state = { count: 0 }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'INCREMENT'});
    }

    reset = () => {
        this.props.dispatch({ type: 'RESET'});
    }
    render () {
        return (
            <div className='counter'>
            <h2>Counter</h2>
            <div>
                <button onClick={this.decrement}>-</button>
                <p>{this.props.count}</p>
                <button onClick={this.increment}>+</button>
            </div>
            <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter)