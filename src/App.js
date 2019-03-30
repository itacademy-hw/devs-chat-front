import React, { Component } from "react";
import Login from './pages/Login';
import Register from './pages/Register';



export default class App extends Component {

    render() {
        return (
            <div id="root">
                <Login />
                <Register />
            </div>
        );
    }
}