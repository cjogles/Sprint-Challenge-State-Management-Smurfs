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
          See Village 
        </button>
        <br></br>
        <br></br>
        <div >
          {console.log(props)}
            {props.map(smurf => {
            console.log(smurf)})}
        </div>        
      </div>
    );
}

export default connect(state => state)(App);
