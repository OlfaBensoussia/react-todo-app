import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditTask extends Component {
  constructor(props) {
    super(props);

    this.onChangeTaskTitle = this.onChangeTaskTitle.bind(this);
    this.onChangeTaskLink = this.onChangeTaskLink.bind(this);
    this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      title: "",
      link: "",
      description: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3800/candidates/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          title: res.data.title,
          link: res.data.link,
          description: res.data.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeTaskTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeTaskLink(e) {
    this.setState({ link: e.target.value });
  }

  onChangeTaskDescription(e) {
    this.setState({ description: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const studentObject = {
      title: this.state.title,
      link: this.state.link,
      description: this.state.description,
    };

    axios
      .put(
        "http://localhost:3800/candidates/" + this.props.match.params.id,
        studentObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Student successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Student List
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={this.state.title}
              onChange={this.onChangeTaskTitle}
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Link</Form.Label>
            <Form.Control
              value={this.state.link}
              onChange={this.onChangeTaskLink}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={this.state.description}
              onChange={this.onChangeTaskDescription}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Update Task
          </Button>
        </Form>
      </div>
    );
  }
}
