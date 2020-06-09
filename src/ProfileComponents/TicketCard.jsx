import React, { Component } from "react";
import { Button, Image, Modal } from "semantic-ui-react";

export default class TicketCard extends Component {
  state = {
    open: true,
    dimmer: null,
    tixObj: {}
  };

  // show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => {
    this.props.unmountMe();
    this.setState({ open: false });
  };

  resolved = () => {
    this.props.unmountMe();
    // this.setState({
    //   tixObj
    // });
    console.log(this.state);
  };

  // componentDidUpdate(prevState) {
  //   if (prevState.open !== this.state.open) {
  //     console.log("updated");
  //   }
  // }

  // componentWillUnmount() {
  //   console.log("I'm dying");
  // }

  // shouldComponentUpdate(nextState) {
  //   if (nextState.open !== this.state.open) {
  //     this.setState(prevState => {
  //       return {
  //         open: !this.state.open
  //       };
  //     });
  //   }
  //   return true;
  // }

  render() {
    console.log(this.props);
    const { open, dimmer } = this.state;
    let {
      title,
      description,
      deadline,
      status,
      category,
      attach_link
    } = this.props.tixObj;



    console.log(this.state);

    return (
      <div>
        {/* <Button onClick={this.show("blurring")}>Blurring</Button> */}

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="huge" src={attach_link} alt="bug img" />
            <Modal.Description>
              {/* <Header>Description</Header> */}
              <h3>{description}</h3>
              <h4>Deadline:&ensp;&ensp;{deadline}</h4>
              <h4>Category:&ensp;&ensp;{category}</h4>
              <h4>Status:&ensp;&ensp;{status}</h4>
              <br />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.resolved}>
              Resolved
            </Button>
            <Button color="blue" onClick={this.close}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
