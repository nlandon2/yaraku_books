import * as React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class ExportForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            file: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            choice: e.target.value,
            file: `/export/${e.target.value}.csv`
        });
    }
    render() {
        return (
            <div>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Export
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                value="books"
                                label="Titles"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                onChange={this.handleChange}
                            />
                            <Form.Check
                                type="radio"
                                value="authors"
                                label="Authors"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Link
                    className="btn btn-primary"
                    to={this.state.file}
                    target="_blank"
                    download
                >
                    Export as CSV
                </Link>{" "}
                <Button>Export as XML</Button>
            </div>
        );
    }
}
