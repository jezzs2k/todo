import React from 'react';
import PropsTypes from 'prop-types';

import './listToDo.css';
import TaskFinishItem from './TaskFinishItem';

const taskFinish = [
  { number: 1, text: 'make have dinner', isComplete: false },
  {
    number: 2,
    text: 'make have breakfast',
    isComplete: false,
  },
  { number: 3, text: 'make have lunch', isComplete: false },
];

const TaskFinish = () => {
  return (
    <div className='listToDo'>
      <h2 className='title'>COMPLETE</h2>
      {taskFinish &&
        taskFinish.map((task) => {
          return <TaskFinishItem task={task} />;
        })}
    </div>
  );
};

TaskFinish.propsTypes = {
  listTask: PropsTypes.array.isRequired,
};

export default TaskFinish;
