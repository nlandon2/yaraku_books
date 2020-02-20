import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class BookSearch extends Component {
    render() {
        return (
            <Form inline onSubmit={this.props.handleSearch}>
                <Form.Group controlId="search">
                    <Form.Control
                        type="search"
                        name="search"
                        value={this.props.search}
                        onChange={this.props.handleChange}
                        placeholder="Search Book"
                        className="mr-sm-2"
                        required
                    />
                </Form.Group>
                <Button variant="outline-success" type="submit">
                    Search
                </Button>
            </Form>
        );
    }
}
