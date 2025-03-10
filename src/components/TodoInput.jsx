import React, { useState } from 'react';
import '../sttyle/style.scss'


function TodoInput({ tasks, setTasks }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText('');
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Vazifa yozing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Qo'shish</button>
    </div>
  );
}

export default TodoInput;