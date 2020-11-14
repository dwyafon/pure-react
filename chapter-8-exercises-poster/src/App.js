import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function App({ poster }) {
  return (
    <div className='poster'>
      <Image image={poster.image} />
      <Title title={poster.title} />
      <Text text={poster.text} />
    </div>
  );
}

const Image = ({ image }) => {
  const { src, alt } = image;
  return (
    <div>
      <img className='image' src={src} alt={alt} />
    </div>
  );
};
const Title = ({ title }) => <div className='title'>{title}</div>;
const Text = ({ text }) => <div className='text'>{text}</div>;

export const poster = {
  image: {
    src: 'https://source.unsplash.com/xcNvDSLepXI/1000x600',
    alt: 'A creek moving down over rocks in a forest',
  },
  title: 'Keep Flowing',
  text: 'Be like water, cutting through rock over years because it is persistent.',
};

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};
Title.propTypes = { title: PropTypes.string.isRequired };
Text.propTypes = { text: PropTypes.string.isRequired };

export default App;
