import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../images/photo1.jpg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='banner'>
          <h1 className='hero__h2'>Little Lemon</h1>
          <h3 className='hero__h3'>Chicago</h3>
          <p className='hero__p'>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist</p>
          <Link to="/booking"><button className = "hero__btn" aria-label='On Click'>Reserve a table</button></Link>
        </div>
        <div className='banner-img'>
          <img src={heroImg} alt='restaurant' />
        </div>
      </div>      
    </section>
  );
};

export default Hero;