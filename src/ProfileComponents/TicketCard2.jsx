import React, { Component } from "react";

class TicketCard extends Component {
  handleClose = () => {
    console.log(this.props);
    this.props.disable();
  };

  handleDelete = () => {
    console.log("x");
  };

  handleEdit = () => {
    console.log("x");
  };

  render() {
    console.log(this.props.tixObj);
    let { title, description, deadline, status, category, attach_link } = this.props.tixObj;

    return (
      <div className='ui raised padded container segment'>
        <h2>Ticket: {title}</h2>
        <h3>Details: {description}</h3>
        <p>Deadline: {deadline}</p>
        <h5>Status: {status}</h5>
        <p>Category: {category}</p>
        <img src={attach_link}/>

        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.handleClose}>Close</button>
      </div>
    );
  }
}

export default TicketCard;
