import React from 'react';
import '../sttyle/style.scss'

function TodoItem({ task, setTasks }) {
  const toggleComplete = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={toggleComplete}>{task.text}</span>
      <button onClick={deleteTask}>O'chirish</button>
    </li>
  );
}

export default TodoItem;
