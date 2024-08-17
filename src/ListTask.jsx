import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import './App.css';

const ListTask = () => {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector(state => state.todos.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not')}>Not Done</button>
      </div>
      <div className="task-list">
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
