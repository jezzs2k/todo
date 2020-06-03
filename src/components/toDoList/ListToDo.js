import React from 'react';
import PropsTypes from 'prop-types';

import './listToDo.css';
import TaskItem from './TaskItem';

const ListToDo = ({ listTask, handleTaskFinish }) => {
  return (
    <div className='listToDo'>
      <h2 className='title'>UPCOMNG</h2>
      {listTask &&
        listTask.map((task, i) => {
          return (
            <TaskItem task={task} handleTaskFinish={handleTaskFinish} key={i} />
          );
        })}
    </div>
  );
};

ListToDo.propsTypes = {
  listTask: PropsTypes.array.isRequired,
};

export default ListToDo;
