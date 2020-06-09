import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Header, Image, Modal } from "semantic-ui-react";

export default class NavBar extends Component {
  state = { open: false };

  show = (size, dimmer) => () => this.setState({ size, dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    console.log(this.props.user);
    const { open, size, dimmer } = this.state;
    return (
      <div className="ui container">
        <h2 className="ui block blue header">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoupkYSnIo6tYcP20skiftjZqrmwAtBtBmkBUXIM3KURh_9R_B"
            alt="bug pic"
            className="ui circular huge image"
          />
          &ensp; myBugTracker
          <Image
            src={this.props.user.imgUrl}
            className="ui circular huge image floated right"
            onClick={this.show("blurring")}
          />
        </h2>

        <div className="ui link menu">
          {!localStorage.token ? (
            <>
              <div className="item">
                <NavLink className="ui button grey" to="/login">
                  Login
                </NavLink>
              </div>
              <div className="item">
                <NavLink className="ui button grey" to="/register">
                  Register
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <div className="item">
                <NavLink className="ui button grey" to="/dashboard">
                  Dashboard
                </NavLink>
              </div>
              <div className="item">
                <NavLink className="ui button grey" to="/newproject">
                  New Project
                </NavLink>
              </div>
              <div className="item">
                <NavLink className="ui button grey" to="/newticket">
                  New Ticket
                </NavLink>
              </div>
              <div className="item">
                <NavLink className="ui button " to="/reports">
                  Reports
                </NavLink>
              </div>

              <div className="item">
                <NavLink className="ui button grey" to="/logoff">
                  Log Off
                </NavLink>
              </div>
              <div className="right item">
                <h3 onClick={this.show("medium", "blurring")}>
                  {this.props.user.username}
                </h3>
              </div>
            </>
          )}
        </div>

        <Modal size={size} dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Profile</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="mini"
              src={this.props.user.imgUrl}
              alt="user img"
            />
            <Modal.Description>
              <Header>{this.props.user.fullName}</Header>

              {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Username:</span> <span>{this.props.user.username}</span>
              </div> */}
              <h3>Username:&ensp;&ensp;{this.props.user.username}</h3>
              <h3>
                Role:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                {this.props.user.role}
              </h3>
              <h3>
                Email:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                {this.props.user.email}
              </h3>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="blue" onClick={this.close}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
