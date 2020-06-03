import React from 'react';
import PropsTypes from 'prop-types';

import './taskFinish.css';
import TaskFinishItem from './TaskFinishItem';

const TaskFinish = ({ taskFinish, handleTaskFinish }) => {
  return (
    <div className='task-finish'>
      <h2 className='title'>COMPLETE</h2>
      {taskFinish &&
        taskFinish.map((task, i) => {
          return (
            <TaskFinishItem
              task={task}
              handleTaskFinish={handleTaskFinish}
              key={i}
            />
          );
        })}
    </div>
  );
};

TaskFinish.propsTypes = {
  listTask: PropsTypes.array.isRequired,
};

export default TaskFinish;
