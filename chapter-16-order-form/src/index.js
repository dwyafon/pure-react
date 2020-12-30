import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;
const RadioWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid #fff;
  padding: 0.5rem 1rem;
  color: #fff;
`

const OrderForm = () => {
  const [size, setSize] = useState('');
  const [topping, setTopping] = useState('');
  const [gluten, setGluten] = useState('');
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    return name === 'sizes'
      ? setSize(value)
      : name === 'toppings'
      ? setTopping(value)
      : name === 'gluten'
      ? setGluten(value)
      : setText(value);
  };

  const handleSubmit = () => {
    alert('Thank you for your order!')
  }

  return (
    <Wrapper>
      {' '}
      <h1>Pizza Order Form</h1>
      <form onSubmit={handleSubmit}>
        <h3>Choose a size</h3>
        <RadioWrapper>
          {' '}
          <div className='radio'>
            <label>
              <input
                type='radio'
                name='sizes'
                value='small'
                checked={size === 'small'}
                onChange={handleChange}
              />
              Small
            </label>
          </div>
          <div className='radio'>
            {' '}
            <label>
              <input
                type='radio'
                name='sizes'
                value='medium'
                checked={size === 'medium'}
                onChange={handleChange}
              />
              Medium
            </label>
          </div>
          <div className='radio'>
            <label>
              <input
                type='radio'
                name='sizes'
                value='large'
                checked={size === 'large'}
                onChange={handleChange}
              />
              Large
            </label>
          </div>
        </RadioWrapper>
        <div className='select'>
          <h3>Toppings</h3>
          <select name='toppings' value={topping} onChange={handleChange}>
            <option value=''>Please choose one topping</option>
            <option value='pineapple'>Pineapple</option>
            <option value='mushroom'>Mushroom</option>
            <option value='spinach'>Spinach</option>
          </select>
        </div>
        <div className='checkbox'>
          <h3>Would you like gluten-free?</h3>
          <label>
            <input
              name='gluten'
              type='checkbox'
              value='yes'
              checked={gluten === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              name='gluten'
              type='checkbox'
              value='no'
              checked={gluten === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        <div className='textarea'>
          <h3>Please let us know of any food allergies:</h3>
          <textarea
            name='allergies'
            rows='4'
            cols='80'
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <Button type='submit' value='submit'>Let's Cook!</Button>
      </form>
    </Wrapper>
  );
};

ReactDOM.render(<OrderForm />, document.getElementById('root'));
