import React, { Component } from "react";
import TicketCard from "./TicketCard";
import { List } from "semantic-ui-react";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      tixObj: {},
      renderChild: false
    };
    this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }
  // state = {
  //   display: "none",
  //   bool: false,
  //   tixObj: {},
  //   renderChild: true
  // };

  handleChildUnmount() {
    this.setState({ renderChild: false });
  }

  toggleDisplay = e => {
    console.log(this.state);
    if (this.state.display === "none") {
      this.setState({
        display: "block"
      });
    } else {
      this.setState({
        display: "none"
      });
    }
  };

  ticketClick = tixObj => {
    console.log(tixObj);
    this.setState({
      tixObj,
      renderChild: true
    });
  };

  handleDisable = () => {
    this.setState({
      renderChild: false
    });
  };

  handleDeleteClick = e => {
    // console.log(this.props.project.id)
    this.props.handleDeleteProject(this.props.project.id);
  };

  listTickets = () => {
    console.log(this.props.project.tickets);
    const sortedTicketArr = this.props.project.tickets.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    console.log(sortedTicketArr);
    return sortedTicketArr.map(tixObj => {
      // return <li  key={tixObj.id} onClick={() => this.ticketClick(tixObj)}>{tixObj.title}</li>
      return (
        // <li  key={tixObj.id} onClick={() => this.ticketClick(tixObj)}>
        //   {tixObj.title}
        // </li>
        <List>
          <List.Item>
            <List.Icon name="ticket" />
            <List.Content key={tixObj.id} onClick={() => this.ticketClick(tixObj)}>
              {tixObj.title}</List.Content>

          </List.Item>
        </List>
      );
    });
  };

  render() {
    let { name, description } = this.props.project;
    // console.log("BOOL", this.state.bool);
    // console.log("render", this.state.renderChild);
    return (
      <div className="ui container">
        <div className="ui celled list">
          <div className="item">
            <br/>
            <i
              className="large bug middle aligned blue icon float right"
              onClick={this.toggleDisplay}
            ></i>    
            <div className="content">              
              <h3 className="header">{name}</h3>
              <div className="description">{description}</div>
              <div style={{ display: this.state.display }}>
                <ul>{this.listTickets()}</ul>
              </div>
            </div>
            <i
              className="large trash middle aligned grey icon float right"
              onClick={this.handleDeleteClick}
            ></i>
          </div>
          {/* <br/> */}
        </div>
        {this.state.renderChild ? (
          <TicketCard
            tixObj={this.state.tixObj}
            disable={this.handleDisable}
            unmountMe={this.handleChildUnmount}
          />
        ) : null}
        {/* <button>Edit</button> */}
        {/* <button className='ui  float right' onClick={this.handleDeleteClick}>Delete Project</button> */}
      </div>
    );
  }
}

export default ProjectCard;
