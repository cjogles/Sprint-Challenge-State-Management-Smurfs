import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

ReactDOM.render(
<Provider store={createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))}>
    <App />
</Provider>, document.getElementById("root"));
