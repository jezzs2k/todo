import React from 'react';
import PropTypes from 'prop-types';

import './taskFinishItem.css';

const TaskItem = ({ task }) => {
  return (
    <div className='task'>
      <p className='number'>
        {task.number}
        <span>.</span>
      </p>
      <p className='text'>{task.text}</p>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
