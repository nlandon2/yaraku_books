import React, { Component } from "react";
import BookCreate from "./BookCreate";
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
        this.handleDelete = this.handleDelete.bind(this);
        this.getBooks = this.getBooks.bind(this);
        this.getAuthors = this.getAuthors.bind(this);
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
                window.location.reload(false);
            });
    }
    getBooks(order) {
        order === ""
            ? axios
                  .get(`/books`)
                  .then(response => {
                      console.log(response);
                      this.setState({
                          books: [...response.data.books]
                      });
                  })
                  .catch(error => {
                      console.log(error);
                  })
            : axios
                  .get(`/books/${order}`)
                  .then(response => {
                      console.log(response);
                      this.setState({
                          books: [...response.data.books]
                      });
                  })
                  .catch(error => {
                      console.log(error);
                  });
    }
    getAuthors(order) {
        order === ""
            ? axios
                  .get(`/authors`)
                  .then(response => {
                      console.log(response);
                      this.setState({
                          authors: [...response.data.authors]
                      });
                  })
                  .catch(error => {
                      console.log(error);
                  })
            : axios
                  .get(`/authors/${order}`)
                  .then(response => {
                      console.log(response);
                      this.setState({
                          books: [...response.data.books]
                      });
                  })
                  .catch(error => {
                      console.log(error);
                  });
    }
    componentDidMount() {
        this.getAuthors("");
        this.getBooks("");
    }
    handleDelete(id) {
        const updatedBooks = this.state.books.filter(book => book.id !== id);
        this.setState({ books: updatedBooks });
        axios.delete(`/books/${id}`);
    }
    render() {
        return (
            <div>
                <BookCreate
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <hr />
                <BookList
                    authors={this.state.authors}
                    books={this.state.books}
                    handleDelete={this.handleDelete}
                    getAuthors={this.getAuthors}
                    getBooks={this.getBooks}
                />
            </div>
        );
    }
}
