import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/Actions';
import AddValue from './components/AddValue'

class App extends Component {

    render() {
      const { increment, decrement, incrementByValue, counterState } = this.props;

      return (
          <div className="App">
              <h2>My counter with React + Redux</h2>

              Current counter value: {counterState.value}
              <div><button onClick={(e) => increment()}>Increment</button></div>
              <div><button onClick={(e) => decrement()}>Decrement</button></div>
              <AddValue handleClick={incrementByValue} />
          </div>
      );

  }
}

function mapStateToProps(state) {
    return {
        counterState: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);