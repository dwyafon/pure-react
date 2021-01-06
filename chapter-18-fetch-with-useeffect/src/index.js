import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Reddit() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json') // Getting network error in Firefox; works in 'Chrome'
      .then((res) => res.json())
      .then((json) => setPosts(json.data.children.map((c) => c.data))) 
      .catch(error => console.log(error))
  }, [setPosts]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<Reddit />, document.querySelector('#root'));
