import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
class Form extends Component {
  state = {
    username: "",
    password: "",
    fullName: "",
    role: "",
    email: "",
    imgUrl: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      username: "",
      password: "",
      fullName: "",
      role: "",
      email: "",
      imgUrl: ""
    });
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  addedRegister = () => {
    let { fullName, role, email, imgUrl } = this.state;
    return (
      <div className="ui container">
        <div className="field">
          <label className="ui blue label">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="full name"
            value={fullName}
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label className="ui blue label">Role</label>
          <input
            type="text"
            name="role"
            placeholder="your role"
            value={role}
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label className="ui blue label">Email</label>
          <input
            type="text"
            name="email"
            placeholder="your email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label className="ui blue label">Image url</label>
          <input
            type="text"
            name="imgUrl"
            placeholder="url link"
            value={imgUrl}
            onChange={this.handleChange}
          />
        </div>
        <br/>
      </div>
    );
  };

  render() {
    let { formName } = this.props;
    let { username, password } = this.state;
    // console.log(this.props)
    return (
      <Grid textAlign="center" style={{ height: "100vh" }}>
        <Grid.Column style={{ maxWidth: 350 }}>
          <form className="ui container form" onSubmit={this.handleSubmit}>
            {/* <h1 className="ui ">{formName}</h1> */}

            <div className="field">
              <label className="ui blue label">Username</label>
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={username}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="ui blue label">Password</label>
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            {formName === "Register" ? this.addedRegister() : null}

            <button className="ui mini blue button" type="submit">
            {formName === "Login" ? 'Login' : 'Register'}

            </button>
          </form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Form;
