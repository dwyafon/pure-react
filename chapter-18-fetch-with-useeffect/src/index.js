import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [inputValue, setValue] = useState('reactjs');
  const [subreddit, setSubreddit] = useState(inputValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e) => setValue(e.target.value)} />
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
}

function Reddit({ subreddit }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`) // Getting network error in Firefox; works in 'Chrome'
      .then((res) => res.json())
      .then((json) => setPosts(json.data.children.map((c) => c.data)))
      .catch((error) => console.log(error));
  }, [subreddit, setPosts]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
