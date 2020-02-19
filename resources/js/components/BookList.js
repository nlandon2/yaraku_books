import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class BookList extends Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Edit Author's Name</th>
                        <th>Delete Book</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.books.map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>
                                {
                                    this.props.authors.filter(
                                        author => author.id === book.author_id
                                    )[0].name
                                }
                            </td>
                            <td>
                                <Link
                                    className="btn btn-sm btn-success"
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
