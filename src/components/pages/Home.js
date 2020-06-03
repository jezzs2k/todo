import React, { useState } from 'react';

import './home.css';
import plusIcon from '../image/plus.svg';
import Menu from '../layers/Menu';

const Home = () => {
  const [state, setState] = useState({
    isHover: false,
  });

  const { isHover } = state;

  const handleHoverAddBtn = () => {
    setState({ ...state, isHover: !isHover });
  };
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
        <div
          className='btn-addTask'
          onMouseEnter={handleHoverAddBtn}
          onMouseLeave={handleHoverAddBtn}>
          <img src={plusIcon} className='add-icon' alt='add task' />
        </div>
        {isHover && (
          <div className='alert'>
            <p>add task</p>
          </div>
        )}
      </div>
      <div className='footer'>
        <p className='text'>@copyright by jezzs</p>
      </div>
    </div>
  );
};

export default Home;
