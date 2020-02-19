import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default class BookList extends Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Delete</th>
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
