import React from 'react';
import '../sttyle/style.scss'


function TodoFilter({ filter, setFilter }) {
  return (
    <div className="todo-filter">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        Barchasi
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Bajarilgan
      </button>
      <button
        className={filter === 'uncompleted' ? 'active' : ''}
        onClick={() => setFilter('uncompleted')}
      >
        Bajarilmagan
      </button>
    </div>
  );
}

export default TodoFilter;