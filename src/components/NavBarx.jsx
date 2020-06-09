import React from 'react';
import {NavLink} from 'react-router-dom'
import {Image, Segment} from 'semantic-ui-react'
import Profile from './Profile'


const NavBar = (props) => {
  console.log(props.user)
  return(

    <div className='ui container'>

      <h2 className="ui block blue header">
        {/* <Image className='ui fluid' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoupkYSnIo6tYcP20skiftjZqrmwAtBtBmkBUXIM3KURh_9R_B' alt='bug pic' className="ui circular huge image"/>&ensp;   BugTracker */}
        {/* <Image className='ui fluid' src='https://www.kingsoftstore.co.uk/wp-content/uploads/2017/05/Bug.png' alt='bug pic' size='massive' centered/> */}
        {/* <img src={props.user.imgUrl}  className="ui circular huge image floated right"/> */}
      </h2>


      <div className="ui link menu">
        {/* <div className="item">
          <NavLink className=" button" to="/">Home</NavLink>
        </div> */}
        <div className="item">
          <NavLink className="ui button" to="/login">Login</NavLink>
        </div>
        <div className="item" >
          <NavLink className="ui button" to="/register">Register</NavLink>
        </div>
        <div className="item">
          <NavLink className="ui button" to="/dashboard">Dashboard</NavLink>
        </div>
        <div className="item">
          <NavLink className="ui button" to="/newproject">New Project</NavLink>
        </div>
        <div className="item">
          <NavLink className="ui button" to="/newticket">New Ticket</NavLink>
        </div>
        <div className="item">
          <NavLink className="ui button" to="/newticket">Reports</NavLink>
        </div>

        <div className="item">
        <NavLink className="ui button" to="/logoff">Log Off</NavLink>
        </div>
        <div className="right item">
          <h3>{props.user.username}</h3>
        </div>
      </div>  
    

    </div>
  )
};

export default NavBar;