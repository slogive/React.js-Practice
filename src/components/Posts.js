import React, { Component } from 'react';
import './Posts.scss';

export class Post extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    this.setState({ posts: data });
    console.log(data);
  }

  render() {
    return (
      <div>
        <h1>Post</h1>
        {this.state.posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Post;
