import React from 'react';
import PropsTypes from 'prop-types';

import './listToDo.css';
import TaskItem from './TaskItem';

const listTask = [
  { number: 1, text: 'make have dinner', isComplete: false },
  {
    number: 2,
    text: 'make have breakfast',
    isComplete: false,
  },
  { number: 3, text: 'make have lunch', isComplete: false },
];

const ListToDo = () => {
  return (
    <div className='listToDo'>
      <h2 className='title'>UPCOMING</h2>
      {listTask &&
        listTask.map((task) => {
          return <TaskItem task={task} />;
        })}
    </div>
  );
};

ListToDo.propsTypes = {
  listTask: PropsTypes.array.isRequired,
};

export default ListToDo;
