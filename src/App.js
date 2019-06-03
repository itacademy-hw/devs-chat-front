import React, { Component } from "react";
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ls from "local-storage";



export default class App extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <Router>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/chat/:id?" component={Chat}/>
            </Router>
        );
    }
}