import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class AuthorEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
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
            .put(`/authors/${this.props.match.params.id}`, {
                name: this.state.name
            })
            .then(response => {
                console.log(response);
                this.props.history.push("/");
            })
            .catch(error => {
                console.log(error.message);
            });
    }
    getAuthors() {
        axios
            .get(`/authors`)
            .then(response => {
                console.log(response);
                this.setState({
                    name: response.data.name
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
    componentWillMount() {
        this.getAuthors();
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="author">
                        <Form.Label>Edit Author's Name</Form.Label>
                        <Form.Control
                            type="name"
                            name="name"
                            value={this.state.name}
                            placeholder="Enter author"
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Edit Author
                    </Button>
                </Form>
            </div>
        );
    }
}
