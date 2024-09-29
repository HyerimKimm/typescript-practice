import { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prev => [...prev, { id: Math.random().toString(), text: text }]);
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
