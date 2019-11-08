import React, { Component } from "react";
import "./App.css";
import { axiosSmurfs } from "../actions";
import { connect } from 'react-redux';

function App (props) {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <button onClick={() => props.dispatch(axiosSmurfs())}>> What Smurfs? </button>
      </div>
    );
}

export default connect(state => state)(App);
