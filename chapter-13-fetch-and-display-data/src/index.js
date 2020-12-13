import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Reddit extends Component {
  state = {
    posts: [],
    loading: true,
    error: undefined,
  };

  componentDidMount() {
    axios
      .get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
      .then((res) => {
        const posts = res.data.data.children.map((obj) => obj.data);
        this.setState({ posts, loading: false });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { posts, error, loading } = this.state;
    let content;

    if (error) {
      content = (
        <>
          <h2>ERROR</h2>
          <p>{JSON.stringify(error)}</p>
        </>
      );
    }

    else if (loading) {
      content = <div>Loading . . .</div>
    }

    else {
      content =   ( <div>
      <h1>{`/r/${this.props.subreddit}`}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
      )
    }

    return (
      <div>{content}</div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Reddit subreddit='reactjs' />
  </React.StrictMode>,
  document.getElementById('root')
);
