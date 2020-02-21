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
            csvFile: "",
            xmlFile: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            choice: e.target.value,
            csvFile: `/export/${e.target.value}.csv`,
            xmlFile: `/export/${e.target.value}.xml`
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
                    to={this.state.csvFile}
                    target="_blank"
                    download
                >
                    Export as CSV
                </Link>{" "}
                <Link
                    className="btn btn-primary"
                    to={this.state.xmlFile}
                    target="_blank"
                    download
                >
                    Export as XML
                </Link>
            </div>
        );
    }
}
