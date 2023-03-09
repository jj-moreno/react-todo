import React, { useState, useEffect } from 'react';

function Task(props) {
  const [isCompleted, setIsCompleted] = useState(false);
  const handleCompleteTask = () => {
    setIsCompleted(true);
    props.completeTask(props.index);
  };
  const handleDeleteTask = () => {
    props.deleteTask(props.index);
  };
  useEffect(() => {
    return () => {
      setIsCompleted(false);
    };
  });
  return (
    <li
      style={{
        textDecoration: props.task.completed ? 'line-through' : '',
      }}
    >
      {props.task.task}
      <button className='delete-btn' onClick={handleDeleteTask}>
        &#10006;
      </button>
      <button className='complete-btn' onClick={handleCompleteTask}>
        &#10004;
      </button>
    </li>
  );
}

export default Task;
