import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
class NewTicketForm extends Component {
  state = {
    projNum: " ",
    title: "",
    description: "",
    deadline: "",
    category: "",
    attachLink: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.props.token);
    console.log(this.state, "state");

    fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${this.props.token}`
      },
      body: JSON.stringify({
        project_id: this.state.projNum,
        title: this.state.title,
        description: this.state.description,
        deadline: this.state.deadline,
        status: "New",
        category: this.state.category,
        attach_link: this.state.attachLink
      })
    })
      .then(r => r.json())
      .then(ticketObj => {
        console.log(ticketObj, "objfrom backend");
        this.props.handleNewTicket(ticketObj);
      });
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      console.log
    );
  };

  render() {
    let projects = this.props.userState.projects;
    // console.log(projects)
    return (
      <Grid textAlign="center" style={{ height: "100vh" }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <form className="ui container form" onSubmit={this.handleSubmit}>
            <h1>New Bug Ticket</h1>

            <div className="field">
              <label className="ui blue label">Project Name</label>
              <select
                name="projNum"
                class="ui fluid dropdown"
                onChange={this.handleChange}
              >
                {projects.map(project => {
                  return <option key={project.id} value={project.id}>{project.name}</option>;
                })}
              </select>
            </div>

            <div className="field">
              <label className="ui blue label">Ticket Title</label>
              <input
                type="text"
                name="title"
                placeholder="bug title -> must be unique"
                value={this.title}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="ui blue label">Ticket Description</label>
              <textarea
                name="description"
                value={this.description}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="field">
              <label className="ui blue label">Deadline</label>
              <input
                type="text"
                name="deadline"
                placeholder="bug deadline"
                value={this.deadline}
                onChange={this.handleChange}
              />
            </div>

            <div className="field">
              <label className="ui blue label">Attachment</label>
              <input
                type="text"
                name="attachLink"
                placeholder="Add attachment link here"
                value={this.attachLink}
                onChange={this.handleChange}
              />
            </div>

            <select
              name="category"
              class="ui fluid dropdown"
              onChange={this.handleChange}
            >
              <option value={this.category}>Bug found</option>
              <option value={this.category}>New feature</option>
              <option value={this.category}>HTML & CSS</option>
              <option value={this.category}>Database</option>
              <option value={this.category}>Frontend</option>
              <option value={this.category}>Backend</option>
            </select>
            <br />
            <button className="ui mini blue button" type="submit">
              Create New Bug Ticket
            </button>
          </form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default NewTicketForm;
