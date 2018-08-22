import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
// import reducer from "../../ducks/reducer";

class Nav extends Component {
  // console.log(props);
  // console.log(props.user_name);
  constructor() {
    super();
    this.state = {
      userid: 0,
      username: ""
    };
    this.handleclicklogout = this.handleclicklogout.bind(this);
  }
  componentDidMount() {
    axios.get(`/api/session`).then(res => {
      // console.log(res);
      this.setState({ userid: res.data.userid, username: res.data.username });
    });
  }

  handleclicklogout() {
    axios.post(`/api/auth/logout`).then(res => {
      // console.log(res);
      this.setState({ userid: "", username: "" });
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        Nav Bar
        <h1 className="App-title">
          Welcome to Helo (DevMountain Simulation 3)
        </h1>
        <button>
          <Link to="/dashboard">Home</Link>
        </button>
        <button>
          <Link to="/new">New Post</Link>
        </button>
        <button onClick={() => this.handleclicklogout()}>
          <Link to="/">Logout</Link>
        </button>
        {/* <h5>{this.props.user_name}</h5> */}
        <h5>{this.state.username}</h5>
        <h6>{this.state.userid}</h6>
        <img src={this.props.profile_pic} height="100" width="100" alt="" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Nav);
