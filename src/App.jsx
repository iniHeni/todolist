import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [ setDoneCount] = useState(0);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    setDoneCount(newTodos.filter(todo => todo.completed).length);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setDoneCount(newTodos.filter(todo => todo.completed).length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Chores ToDo List</h1>
      <TodoList 
        todos={todos} 
        addTodo={addTodo} 
        toggleTodo={toggleTodo} 
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
