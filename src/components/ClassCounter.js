import React, { Component } from "react";
import axios from "axios";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      posts: [],
      error: "",
    };
  }
  componentDidMount() {
    //fetch data
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          error: "Error Data",
        });
      });
  }
  render() {
    const { posts, error } = this.state;
    return (
      <div>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default ClassCounter;
