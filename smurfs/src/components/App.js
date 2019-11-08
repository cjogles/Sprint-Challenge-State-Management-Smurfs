import React, { Component } from "react";
import "./App.css";
import { getSmurfs } from "../actions";
import { connect } from 'react-redux';
import Form from './SmurfForm';

function App (props) {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Have fun!</div>
        <br></br>
        <Form/>
        <br></br>
        <button onClick={() => 
          props.dispatch(getSmurfs())}>
          What Smurfs? 
        </button>
        <div >
            
        </div>        
      </div>
    );
}

export default connect(state => state)(App);
