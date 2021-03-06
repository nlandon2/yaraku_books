import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSort,
    faSortDown,
    faSortUp
} from "@fortawesome/free-solid-svg-icons";

export default class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAuthorSort: faSort,
            currentBookSort: faSort
        };
        this.toggleAuthorSort = this.toggleAuthorSort.bind(this);
        this.toggleBookSort = this.toggleBookSort.bind(this);
    }

    toggleAuthorSort() {
        let nextSort, order;

        if (this.state.currentAuthorSort === faSortDown) {
            order = "";
            nextSort = faSort;
        } else if (this.state.currentAuthorSort === faSort) {
            order = "ascend";
            nextSort = faSortUp;
        } else {
            order = "descend";
            nextSort = faSortDown;
        }

        this.setState({
            currentAuthorSort: nextSort,
            currentBookSort: faSort
        });
        this.props.getAuthors(order);
    }

    toggleBookSort() {
        let nextSort, order;
        if (this.state.currentBookSort === faSortDown) {
            order = "";
            nextSort = faSort;
        } else if (this.state.currentBookSort === faSort) {
            order = "ascend";
            nextSort = faSortUp;
        } else {
            order = "descend";
            nextSort = faSortDown;
        }

        this.setState({
            currentAuthorSort: faSort,
            currentBookSort: nextSort
        });
        this.props.getBooks(order);
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th onClick={this.toggleBookSort}>
                            Title{" "}
                            <FontAwesomeIcon
                                icon={this.state.currentBookSort}
                            />
                        </th>
                        <th onClick={this.toggleAuthorSort}>
                            Author{" "}
                            <FontAwesomeIcon
                                icon={this.state.currentAuthorSort}
                            />
                        </th>
                        <th>Edit Author's Name</th>
                        <th>Delete Book</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.books.map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>
                                {book.name
                                    ? book.name
                                    : this.props.authors.filter(
                                          author => author.id === book.author_id
                                      )[0].name}
                            </td>
                            <td>
                                <Link
                                    className="btn btn-success"
                                    to={`authors/${book.author_id}/edit`}
                                >
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        this.props.handleDelete(book.id)
                                    }
                                >
                                    Delete Book
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}
