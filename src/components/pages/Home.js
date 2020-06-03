import React from 'react';

import './home.css';
import Menu from '../layers/Menu';

const Home = () => {
  return (
    <div className='content'>
      <div className='header'>
        <Menu />
      </div>
      <div className='bg'>
        <div className='text'>
          <p>Seems like</p>
          <p>You have no list</p>
        </div>
      </div>
      <div className='footer'>
        <p className='text'>@copyright by jezzs</p>
      </div>
    </div>
  );
};

export default Home;
