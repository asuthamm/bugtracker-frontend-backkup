import React, { Component } from 'react';
import {Grid, Header, Form, Segment, Button, Message, Image} from 'semantic-ui-react'
class Form2 extends Component {

  state = {
    username: "",
    password: "",
    fullName: "",
    role:     "",
    email:    "",
    imgUrl:   ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {username, password, fullName, role, email, imgUrl} = this.state
    // console.log(this.props)
    return (

      <Grid textAlign='center'  style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' /> Log-in to your account
        </Header>
        <Form size='large' onSubmit={this.handleSubmit}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' name="username" value={username}  onChange={this.handleChange}/>
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              name="password"
              type='password'
              value={password}
              onChange={this.handleChange}
            />
            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
        {this.state.error ? <p>{this.state.error}</p> : <p></p>}
      </Grid.Column>
    </Grid>
    );
  }
}

export default Form2;