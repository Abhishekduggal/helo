import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: []
    };
  }

  componentDidMount() {
    let id = this.props.match.params.postid;
    axios
      .post(`/api/post/${id}`)
      .then(res => {
        // console.log(res);
        this.setState({ post: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    // console.log(this.props.match.params.postid);
    // console.log(this.state);

    let displaypost = this.state.post.map((display, i) => {
      return (
        <div key={i}>
          <h3>{display.title}</h3>
          <img src={display.img} alt="" />
          <h5>{display.content}</h5>
        </div>
      );
    });

    return (
      <div>
        <h1>This is the Post Component</h1>
        {displaypost}
      </div>
    );
  }
}

export default Post;
