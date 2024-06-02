/* eslint-disable react/prop-types */
import { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, addTodo, toggleTodo, removeTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <ul className="list-none p-0">
        {todos.map((todo, index) => (
          <TodoItem 
            key={index} 
            todo={todo} 
            index={index} 
            toggleTodo={toggleTodo} 
            removeTodo={removeTodo} 
          />
        ))}
      </ul>
      <hr className="my-4 border-gray-600" />
      <div className="mt-4 text-lg text-center">
        Done: {todos.filter(todo => todo.completed).length}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-start mt-4 w-full">
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          className="w-full p-2 mb-2 border rounded bg-gray-800 text-white"
          placeholder="Add todo"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          ADD TASK
        </button>
      </form>
    </div>
  );
}

export default TodoList;
