import React, { Component } from "react";
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom'



export default class App extends Component {

    render() {
        return (
            <div id="root">
                <Router>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Router>
            </div>
        );
    }
}