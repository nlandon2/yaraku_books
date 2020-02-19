import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class BookList extends Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.books.map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}
