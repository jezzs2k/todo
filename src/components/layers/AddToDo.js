import React, { useState } from 'react';

import './addToDo.css';

const AddToDo = ({ closeModal, addTask }) => {
  const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
  };
  return (
    <div className='modal'>
      <div className='content'>
        <h2 className='title'>ADD A TASK</h2>
        <div className='close' onClick={closeModal}>
          <img
            src='https://cdn.glitch.com/93da3caa-db24-4c0b-ba19-61b6378f8fc5%2Fclose-cross.svg?v=1591154055122'
            className='close-icon'
            alt='close'
          />
        </div>
        <div className='form'>
          <input
            className='form-control'
            value={text}
            onChange={handleInput}
            placeholder='Task...'
          />
        </div>
        <div className='action'>
          <button className='btn add' onClick={addTask(text)}>
            ADD
          </button>
        </div>
      </div>
      <div className='bg'></div>
    </div>
  );
};

export default AddToDo;
