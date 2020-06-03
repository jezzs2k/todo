import React, { Fragment } from 'react';

import './menu.css';
import MenuIcon from '../image/menu.svg';

const Menu = () => {
  return (
    <Fragment>
      <div className='menu'>
        <div className='btn'>
          <img src={MenuIcon} className='btn-icon' alt='Menu-icon' />
        </div>
        <div className='logo'>
          <h2 className='name'>DAILIST</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
