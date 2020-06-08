import React, { useState } from 'react';
import Task from './Task';

function Todo() {
  const [tasks, setTasks] = useState([
    { task: 'will unmonut', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const createTask = (e) => {
    setNewTask(e.target.value);
  };

  const handleCreateTask = () => {
    if (!newTask) return;

    setTasks([...tasks, { task: newTask, completed: false }]);
    setNewTask('');
  };

  const completeTask = (index) => {
    tasks[index].completed = true;
  };

  const deleteTask = (index) => {
    const tasksArrCopy = [...tasks];
    tasksArrCopy.splice(index, 1);
    setTasks(tasksArrCopy);
  };

  return (
    <div className='todo-container'>
      <div className='header'>TODO - ITEMS</div>
      <ul className='tasks'>
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
      <div className='create-task'>
        <input type='text' value={newTask} onChange={createTask}></input>
        <button className='enter-btn' onClick={handleCreateTask}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default Todo;
