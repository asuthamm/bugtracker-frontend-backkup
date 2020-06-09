import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

class ModalExampleDimmer extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button onClick={this.show("blurring")}>Blurring</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Profile</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="large"
              src="https://ca.slack-edge.com/T02MD9XTF-UQLTN7R37-dcc5ff846fc6-48"
            />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
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

export default ModalExampleDimmer;
