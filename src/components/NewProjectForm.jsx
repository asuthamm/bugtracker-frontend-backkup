import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
class NewProjectForm extends Component {
  state = {
    name: "",
    description: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.props.token);
    let projObj = { ...this.state, user_id: this.props.user.id };
    // console.log(projObj);

    fetch("http://localhost:4000/projects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${this.props.token}`
      },
      body: JSON.stringify(projObj)
    })
      .then(r => r.json())
      .then(projx => {
        // console.log(projx)
        this.props.handleNewProject(projx);
      });
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    // console.log(this.props, this.props.user.id)
    return (
      <Grid textAlign="center" style={{ height: "100vh" }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <form className="ui container form" onSubmit={this.handleSubmit}>
            <h1>New Project</h1>

            <div className="field">
              <label className="ui blue label">Project Name</label>
              <input
                type="text"
                name="name"
                placeholder="project name"
                value={this.name}
                onChange={this.handleChange}
              />
            </div>

            <div className="field">
              <label className="ui blue label">Project Description</label>
              <input
                type="text"
                name="description"
                placeholder="project description"
                value={this.description}
                onChange={this.handleChange}
              />
            </div>

            <button className="ui mini blue button" type="submit">
              Create New Project
            </button>
          </form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default NewProjectForm;
