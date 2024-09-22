import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Finish the course' }];

  return (
    <div>
      <TodoList todos={todos}/>
    </div>
  );
};

export default App;
