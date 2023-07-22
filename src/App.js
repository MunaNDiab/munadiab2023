import React, { useState } from 'react';
import TodoCount from './TodoCount';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3", "Task 4"]);

  const Todo = (newtask) => {
    setTasks([...tasks, newtask]);
  }

  return (
    <div>
      <TodoCount tasks={tasks} />
      <TodoList tasks={tasks} />
      <AddTodo Todo={Todo} />
    </div>
  );
}

export default App;