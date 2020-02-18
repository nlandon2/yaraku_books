import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreateTable extends Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="title"
                        name="title"
                        value={this.props.title}
                        placeholder="Enter title"
                        onChange={this.props.handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="author"
                        name="author"
                        value={this.props.author}
                        placeholder="Enter author"
                        onChange={this.props.handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        );
    }
}
