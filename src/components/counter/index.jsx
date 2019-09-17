import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../redux/actions';
import './counter.css';

class Counter extends Component {
    state = { count: 0 }

    increment = () => {
        this.props.dispatch(increment());
    }

    decrement = () => {
        this.props.dispatch(decrement());
    }

    reset = () => {
        this.props.dispatch(reset());
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