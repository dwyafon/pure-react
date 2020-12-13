import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Reddit extends Component {
  state = {
    posts: [],
    error: undefined,
  };

  componentDidMount() {
    axios
      .get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
      .then((res) => {
        const posts = res.data.data.children.map((obj) => obj.data);
        this.setState({ posts });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return (
        <>
          <h2>ERROR</h2>
          <p>{JSON.stringify(error)}</p>
        </>
      );
    }

    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Reddit subreddit='reactjs' />
  </React.StrictMode>,
  document.getElementById('root')
);
