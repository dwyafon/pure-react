import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Input = styled.input`
  padding: 1rem 2rem;
  font-size: 1.5rem;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
`;

const Error = styled.div`
  font-size: 5rem;
  font-family: monospace;
  color: red;
`;

function App() {
  const [inputValue, setValue] = useState('reactjs');
  const [subreddit, setSubreddit] = useState(inputValue);

  const input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(inputValue);
    setValue('');
  };

  useEffect(() => {
    document.title = subreddit;
    input.current.focus();
  }, [subreddit, input]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          ref={input}
          value={inputValue}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
}

function Reddit({ subreddit }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
    setPosts([]);
  };

  useEffect(() => {
    setError(false);
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => res.json())
      .then((json) => setPosts(json.data.children.map((c) => c.data)))
      .catch((error) => handleError());
  }, [subreddit, setPosts]);

  return (
    <>
      {error && (
        <Error className='error'>Please enter an existing subreddit name</Error>
      )}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
