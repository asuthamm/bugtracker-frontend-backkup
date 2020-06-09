import React, { Component } from "react";
import { Image, Segment } from "semantic-ui-react";
class Reports extends Component {
  render() {
    return (
      <div className='ui container'>
      <Segment>
        <h2 colorgreen>Available only for paid customer.</h2>
        <Image
          src="https://cherwellsupport.com/WebHelp/en/7.0/31333.png" size="huge" centered
        />
      </Segment>
      </div>
    );
  }
}

export default Reports;
