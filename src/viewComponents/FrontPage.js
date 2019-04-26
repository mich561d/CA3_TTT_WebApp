import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import '../App.css';
import Login from "./Login";
import AdminPage from "./AdminPage";
import UserPage from "./UserPage";

export default class App extends Component {
    state = { token: "" };

    render() {
        return (
            <Router >
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                        <Route path="/userPage" render={() => <UserPage superState={this.state} />} />
                        <Route path="/adminPage" render={() => <AdminPage superState={this.state} />} />
                        <Route path="/login" render={() => <Login superState={this.state} />} />
                        <Route path="/register" render={() => <Register />} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router >
        );
    };
}

function Header() {
    return (
        <ul className="header">
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/userPage">User page</NavLink></li>
            <li><NavLink activeClassName="active" to="/adminPage">Admin page</NavLink></li>
            <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
            <li><NavLink activeClassName="active" to="/register">Register</NavLink></li>
        </ul>
    )
};

function Home() {
    return (
        <h2>Home</h2>
    )
};

function Register() {
    return (
        <p>Register</p>
    )
};

function NoMatch() {
    return (
        <h2>404 - Page not found!</h2>
    )
};