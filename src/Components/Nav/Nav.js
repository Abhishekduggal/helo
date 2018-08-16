import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import reducer from "../../ducks/reducer";

const Nav = props => {
  // console.log(props);
  // console.log(props.user_name);
  return (
    <div>
      Nav Bar
      <h1 className="App-title">Welcome to Helo (DevMountain Simulation 3)</h1>
      <button>
        <Link to="/dashboard">Home</Link>
      </button>
      <button>
        <Link to="/new">New Post</Link>
      </button>
      <button>
        <Link to="/">Logout</Link>
      </button>
      <h5>{props.user_name}</h5>
      <img src={props.profile_pic} height="100" width="100" alt="" />
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Nav);
