import React, { Component } from 'react';
import '../App.css';

export default class AdminPage extends Component {
    state = { adminPage: [] };

    fetchPage = async () => {
        const url = "https://fenonline.dk/CA3_BACKEND/api/info/admin";
        const getHeader = {
            headers: {
                "x-access-token": this.props.superState.token
            }
        };

        const data = await fetch(url, getHeader).then(res => {
            if (!res.ok) { throw Error(res.status + ": " + res.statusText + " | You are not logged in as an Admin!"); }
            return res.json();
        }).then(data => {
            return data.msg;
        }).catch(error => {
            console.log(error);
            return error.message;
        });

        this.setState({ adminPage: data });
    }

    componentDidMount() {
        this.fetchPage();
    }

    render() {
        return (
            <div>
                <h2>Admin page</h2>
                <p>{this.state.adminPage}</p>
            </div>
        );
    }
}