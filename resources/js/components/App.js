import React, { Component } from "react";
import CreateTable from "./CreateTable";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            books: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return <CreateTable handleChange={this.handleChange} />;
    }
}
