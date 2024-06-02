/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';

// eslint-disable-next-line react/prop-types
function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <li className="flex items-center justify-between mb-2 p-2 border rounded bg-gray-800">
      <div className="flex items-center">
        <input 
          type="checkbox" 
          // eslint-disable-next-line react/prop-types
          checked={todo.completed} 
          onChange={() => toggleTodo(index)} 
          className="mr-2"
        />
        <span className={todo.completed ? 'line-through' : ''}>
          {todo.text}
        </span>
      </div>
      <button 
        onClick={() => removeTodo(index)} 
        className="text-red-500 hover:text-red-700"
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;
