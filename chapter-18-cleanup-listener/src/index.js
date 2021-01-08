import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #031018;
  color: #fff;
`

const Input = styled.input`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background: transparent;
  color: #fff;
  margin: 2rem;
  border: 1px solid #fff;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  background: transparent;
  color: #fff;
  border: 0.5px solid #fff;
  border-radius: 5px;
`;

const Error = styled.div`
  font-size: 5rem;
  font-family: monospace;
  color: red;
`;

function App() {
  const [inputValue, setValue] = useState('linux');
  const [subreddit, setSubreddit] = useState(inputValue);

  const input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

  useEffect(() => {
    document.title = inputValue;
    window.addEventListener("mouseover", () => input.current.focus())
    const inputRef = input.current
    return () => window.removeEventListener("mouseover", () => inputRef.focus())
  }, [inputValue]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          ref={input}
          value={inputValue}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
      <Reddit subreddit={subreddit} />
    </Wrapper>
  );
}

function Reddit({ subreddit }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true)

  const handleError = () => {
    setError(true);
    setPosts([]);
  };

  useEffect(() => {
    let mounted = true;
    setLoading(true)
    setError(false);
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => res.json())
      .then((json) => {
        setPosts(json.data.children.map((c) => c.data));
        if (mounted) {
          setLoading(false)
        }
      })
      .catch((error) => handleError());
      return () => mounted = false;
 
  }, [subreddit, setPosts]);

  return (
    <>
    <div>{loading ? <p>Loading ...</p> : ''}</div>
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
