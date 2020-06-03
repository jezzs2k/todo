import React, { useState, Fragment } from 'react';

import './home.css';
import plusIcon from '../image/plus.svg';
import Menu from '../layers/Menu';
import TaskFinish from '../toDoList/TaskFinish';
import ListToDo from '../toDoList/ListToDo';
import AddToDo from '../layers/AddToDo';

const Home = () => {
  let listTask = [];
  let taskFinish = [];
  const [state, setState] = useState({
    isHover: false,
    tasks: [],
  });

  const [modal, setModal] = useState(false);
  const handleClickModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const { isHover, tasks } = state;

  tasks.forEach((task) => {
    if (task.isComplete) {
      taskFinish = [...taskFinish, task];
    } else {
      listTask = [...listTask, task];
    }
  });

  const addTask = (text) => {
    return () => {
      let number = 1;

      if (tasks.length > 0) {
        number = tasks[tasks.length - 1].number + 1;
      }

      setState({
        ...state,
        tasks: [
          ...tasks,
          {
            number: number,
            text,
            isComplete: false,
          },
        ],
      });

      setModal(false);
    };
  };

  const handleHoverAddBtn = () => {
    setState({ ...state, isHover: !isHover });
  };

  const handleTaskFinish = (task) => {
    return () => {
      const index = tasks.indexOf(task);
      setState({
        ...state,
        tasks: [
          ...tasks.slice(0, index),
          { ...task, isComplete: !task.isComplete },
          ...tasks.slice(index + 1),
        ],
      });
    };
  };
  return (
    <div className='content'>
      {modal && <AddToDo closeModal={closeModal} addTask={addTask} />}
      <div className='header'>
        <Menu />
      </div>
      {tasks.length <= 0 ? (
        <div className='bg'>
          <div className='text'>
            <p>Seems like</p>
            <p>You have no list</p>
          </div>
        </div>
      ) : (
        <Fragment>
          {listTask.length > 0 && (
            <ListToDo listTask={listTask} handleTaskFinish={handleTaskFinish} />
          )}
          {taskFinish.length > 0 && (
            <TaskFinish
              taskFinish={taskFinish}
              handleTaskFinish={handleTaskFinish}
            />
          )}
        </Fragment>
      )}
      <div
        className='btn-addTask'
        onMouseEnter={handleHoverAddBtn}
        onMouseLeave={handleHoverAddBtn}
        onClick={handleClickModal}>
        <img src={plusIcon} className='add-icon' alt='add task' />
      </div>
      {isHover && (
        <div className='alert'>
          <p>add task</p>
        </div>
      )}
      <div className='footer'>
        <p className='text'>@copyright by jezzs</p>
      </div>
    </div>
  );
};

export default Home;
