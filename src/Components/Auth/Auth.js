import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
    this.updateUsernameInput = this.updateUsernameInput.bind(this);
    this.updatePasswordInput = this.updatePasswordInput.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleGetUser = this.handleGetUser.bind(this);
  }

  updateUsernameInput(username) {
    this.setState({ username });
  }

  updatePasswordInput(password) {
    this.setState({ password });
  }

  handleGetUser() {
    let { username, password } = this.state;
    // console.log(username, password);
    axios
      .post("/api/user", { username, password })
      .then(response => {
        // console.log(response);
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleCreateUser() {
    let { username, password } = this.state;
    axios
      .post("/api/user/create", { username, password })
      .then(response => {
        // console.log(response);
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // console.log(this.props);
    let { username, password } = this.state;
    // console.log(username, password);

    return (
      <div>
        <h2>This is the Auth Component</h2>
        <input
          className="UserName"
          placeholder="User Name"
          value={username}
          onChange={e => this.updateUsernameInput(e.target.value)}
        />
        <input
          className="Password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => this.updatePasswordInput(e.target.value)}
        />
        <br />
        <br />
        <button onClick={this.handleGetUser} className="LoginButton">
          Login
        </button>
        <br />
        <br />
        <button onClick={this.handleCreateUser} className="RegisterButton">
          Register
        </button>
        {this.state.redirect && <Redirect to="/dashboard" />}
      </div>
    );
  }
}

export default Auth;
