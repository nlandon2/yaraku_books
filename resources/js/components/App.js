import React, { Component } from "react";
import CreateTable from "./CreateTable";
import BookList from "./BookList";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            name: "",
            books: [],
            authors: []
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
                    authors: [response.data.authors, ...this.state.authors],
                    books: [response.data.books, ...this.state.books]
                });
                this.setState({
                    title: "",
                    name: ""
                });
            });
    }
    getBooks() {
        axios
            .get("/books")
            .then(response => {
                this.setState({
                    books: [...response.data.books]
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    getAuthors() {
        axios
            .get("/authors")
            .then(response => {
                this.setState({
                    authors: [...response.data.authors]
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    componentDidMount() {
        this.getAuthors();
        this.getBooks();
    }
    render() {
        return (
            <div>
                <CreateTable
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <hr />
                <BookList
                    authors={this.state.authors}
                    books={this.state.books}
                />
            </div>
        );
    }
}
