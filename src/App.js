import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router'


import {withRouter} from 'react-router-dom'
// function(boringComponent) => magicalComponent

import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import NewTicketForm from './components/NewTicketForm'
import NewProjectForm from './components/NewProjectForm'
import SearchBar from './components/SearchBar'
import Profile from './components/Profile'
import Reports from './components/Reports'

import DashboardContainer from './ProfileComponents/DashboardContainer'

class App extends React.Component {

  state = {
    user: {},
    projects: [],
    searchTerm: '',
    token: ""
  }

  componentDidMount() {
    // console.log('...cdm...')
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token")

      fetch("http://localhost:4000/persist", {
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token)
          this.setState({
            user: {
              id:       data.user.id,
              username: data.user.username,
              fullName: data.user.name,
              role:     data.user.role,
              email:    data.user.email,
              imgUrl:   data.user.img_url
            },
            projects: data.user.projects,
            token: data.token
          }, () => {
            // this.props.history.push("/profile")
          })
        }
      })
    }
  }

  handleNewTicket = (ticketObj) => {
    console.log(this.state.projects, 'handleNewTicket func')
    console.log(ticketObj, 'handleNewTicket func')
    let myProjId = ticketObj.project_id
    let myProj = this.state.projects.find(project => project.id === myProjId)
    console.log(myProj)
    myProj.tickets.push(ticketObj)
    // console.log(myProj)
    // console.log(this.state.projects)

    let modifiedProjArr = this.state.projects.filter(proj => proj.id !== myProj.id)
    // const complete = this.props.todos.filter(todo => todo.completed)
    // console.log(modifiedProjArr)
    modifiedProjArr.push(myProj)
   
    console.log(modifiedProjArr)
    this.setState({
      projects: modifiedProjArr
    })
    this.props.history.push("/dashboard")
  }

  handleDeleteProject = (id) => {
    console.log(id)
    fetch(`http://localhost:4000/projects/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then( 
      this.setState(prevState => { 
        let filteredProjects = prevState.projects.filter(project => project.id !== id)
        return {projects: filteredProjects }})
    )

  }

  handleLoginSubmit = (userInfo) => {
    // console.log("Login form has been submitted", userInfo)
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        userInfo
      )
    })
    .then(r => r.json())
    .then(data => {
      // console.log(data.user.img_url);
      if (!data.error) {
        localStorage.setItem("token", data.token)
        this.setState({
          // user: data.user,
          user: {
            id:       data.user.id,
            username: data.user.username,
            fullName: data.user.name,
            role:     data.user.role,
            email:    data.user.email,
            imgUrl:   data.user.img_url
          },
          projects: data.user.projects,
          token: data.token
        }, () => {
          this.props.history.push("/dashboard")
        })
      }
    })
  }

  handleRegisterSubmit = (userInfo) => {
    // console.log('userInfo: ', userInfo, userInfo.fullName)
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        // userInfo
        {username: userInfo.username,
         password: userInfo.password,
         name:     userInfo.fullName,
         role:     userInfo.role,
         email:    userInfo.email,
         img_url:  userInfo.imgUrl
         }
      )
    })
    .then(r => r.json())
    .then(data => {
      // console.log(data.user);
      if (!data.error) {
        localStorage.setItem("token", data.token)
        this.setState({
          user: data.user,
          token: data.token
        }, () => {
          this.props.history.push("/login")
        })
      }
    })
    console.log(this.state)
  }


  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register" handleSubmit={this.handleRegisterSubmit}/>
    } else if (routerProps.location.pathname === "/newproject") {
      return <NewProjectForm user={this.state.user} handleNewProject={this.handleNewProject}/>
    } else if (routerProps.location.pathname === "/newticket") {
      return <NewTicketForm userState={this.state} handleNewTicket={this.handleNewTicket}/>
    }
  }

  getSearchStr = (searchStr) => {
    this.setState({
      searchTerm: searchStr 
    })
  }

  genNewProjArr = () => {
    // console.log(this.state.searchTerm)
    // console.log(this.state.projects)
    const newArr = this.state.projects.filter( project => project.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || project.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    // let newArr = this.state.projects
    // console.log(newArr)
   return newArr
  }

handleNewProject = (newProj) => {

  let modifiedProjArr = [...this.state.projects, newProj]
  console.log(newProj)
  this.setState({
    projects: modifiedProjArr
  })
  this.props.history.push("/dashboard")
}

  renderDashboard = (routerProps) => {
    // console.log(this.state, 'dashboard')
    // console.log(routerProps, 'dashboard')
    return <DashboardContainer token={this.state.token} user={this.state.user} projects={this.genNewProjArr()}  handleDeleteProject={this.handleDeleteProject} />
  }

  logoffAct = () => {
    localStorage.clear()
    this.setState({
      user: {},
      projects: [],
      searchTerm: '',
      token: ""
    })
    this.props.history.push("/")
  }

  render(){
    // let { user, projects} = this.state
    console.log(this.state, "APP STATE rendering")
    // let {userId} = this.state.user.id
    // console.log(userId)
    // console.log(this.state, "APP PROPS")

    return (
      <div className="ui center App">
        <NavBar user={this.state.user}/>
        <SearchBar searchTerm={this.state.searchTerm} getSearchStr={this.getSearchStr}/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/logoff" render={ this.logoffAct } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/newproject" render={ this.renderForm } />
          <Route path="/newticket" render={ this.renderForm } />
          <Route path="/dashboard" render={ this.renderDashboard } />
          <Route path="/reports" render={() => <Reports/>}/>
          {/* <Route path="/newticket" render={() => <NewTicketForm /> } /> */}
      {/* <Route path="/newproject" render={() => <NewProjectForm /> } />  */}    
          <Route path="/" exact render={() => <Home /> } />
          <Route path="/profile" exact render={() => <Profile /> } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

export default withRouter(App);
