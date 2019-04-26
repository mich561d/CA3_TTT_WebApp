import React, { Component } from 'react';
import '../App.css';

export default class SW1 extends Component {
    state = { characters: [], error: [] };

    fetchPage = async () => {
        const id = Math.ceil(Math.random() * 87);;
        const url = `https://fenonline.dk/CA3_BACKEND/api/generic/get/${id}`;
        const getHeader = {
            headers: {
                "x-access-token": this.props.superState.token
            }
        };

        const data = await fetch(url, getHeader).then(res => {
            if (!res.ok) { throw Error(res.status + ": " + res.statusText + " | A problem occurred!"); }
            return res.json();
        }).then(data => {
            return data;
        }).catch(error => {
            console.log(error);
            alert(error);
        });

        this.setState({ characters: data });
    }

    componentDidMount() {
        this.fetchPage();
    }

    render() {
        return (
            <div>
                <h2>Get One</h2>
                {/* <p>{this.state.characters.map(char => char.name + ": " + char.gender)}</p> */}
                <p>{this.state.characters}</p>
            </div>
        );
    }
}

export class SW5 extends Component {
    state = { characters: [] };

    fetchPage = async () => {
        const url = "https://fenonline.dk/CA3_BACKEND/api/generic/getFive";
        const getHeader = {
            headers: {
                "x-access-token": this.props.superState.token
            }
        };

        const data = await fetch(url, getHeader).then(res => {
            if (!res.ok) { throw Error(res.status + ": " + res.statusText + " | A problem occurred!"); }
            return res.json();
        }).then(data => {
            return data;
        }).catch(error => {
            console.log(error);
            alert(error);
        });

        this.setState({ characters: data });
    }

    componentDidMount() {
        this.fetchPage();
    }

    render() {
        return (
            <div>
                <h2>Get One</h2>
                {/* <p>{this.state.characters.map(char => char.name + ": " + char.gender)}</p> */}
                <p>{this.state.characters}</p>
            </div>
        );
    }
}