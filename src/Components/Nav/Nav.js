import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
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
    </div>
  );
};

export default Nav;
