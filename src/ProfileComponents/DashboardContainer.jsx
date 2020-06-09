import React, { Component } from 'react';
import ProjectCard from './ProjectCard'
// import NewTicketForm from '../components/NewTicketForm'
import { Grid } from "semantic-ui-react";
class DashboardContainer extends Component {

  render() {
    let {projects} = this.props
    // let {user:{username}, projects} = this.props
    // console.log(this.props)
     let sortedProjectArr =    projects.sort((a,b) => a.name.localeCompare(b.name))
 
    let projectArr =  sortedProjectArr.map(projectObj => <ProjectCard key={projectObj.id} project={projectObj} handleDeleteProject={this.props.handleDeleteProject} handleNewTicket={this.props.handleNewTicket}/>)
    // console.log(projObj)

    return (
 
      <Grid textAlign="center" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 750 }}>
      <div className='ui raised padded container segment' align="left">
     
        <h1>Project:</h1>
        <ul onClick={this.handleClick}>
          {projectArr}
        </ul>
      </div>
      </Grid.Column>
      </Grid>
    );
  }
}
export default DashboardContainer;