import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import "./sttyle/style.scss"

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'uncompleted') return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>To-Do App</h1>
      <TodoInput tasks={tasks} setTasks={setTasks} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;