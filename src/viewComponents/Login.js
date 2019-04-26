import React, { Component } from 'react';
import { BrowserRouter as Prompt } from "react-router-dom";
import '../App.css';

export default class Login extends Component {
    state = { username: "", password: "", isBlocking: false };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
        if (name === "username") {
            this.setState({ isBlocking: value.length > 0 });
        }
    }

    handleSubmit = event => {
        const credentials = { username: this.state.username, password: this.state.password };
        this.login(credentials);
        event.preventDefault();
        event.target.reset();
        this.setState({ isBlocking: false });
    }

    login = credentials => {
        const url = "https://fenonline.dk/CA3_BACKEND/api/login";
        const postHeader = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        };
        fetch(url, postHeader).then(res => {
            if (!res.ok) { throw Error(res.status + ": " + res.statusText + " | Wrong username or password!"); }
            return res.json();
        }).then(data => {
            console.log(data);
            this.props.superState.token = data.token;
            alert("You have succesfully logged in!");
        }).catch(error => alert(error));
    }

    render() {
        let { isBlocking } = this.state;
        return (
            <React.Fragment>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <Prompt when={isBlocking} message={location => `You did not log in! Are you sure you want to go to ${location.pathname}?`} />
                    <input name="username" value={this.state.firstName} onChange={this.handleChange} placeholder="Username" /><br />
                    <input type="password" name="password" value={this.state.firstName} onChange={this.handleChange} placeholder="Password" /><br />
                    <p><button>Log in!</button></p>
                </form>
            </React.Fragment>
        );
    }
}