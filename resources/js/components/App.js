import React, { Component } from "react";
import CreateTable from "./CreateTable";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            name: "",
            books: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        axios
            .post("/books", {
                title: this.state.title,
                name: this.state.name
            })
            .then(response => {
                this.setState({
                    books: [response.data, ...this.state.books]
                });
                // then clear the value of textarea
                this.setState({
                    title: "",
                    name: ""
                });
            });
    }
    render() {
        return (
            <CreateTable
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}
