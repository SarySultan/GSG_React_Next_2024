import React, { useState } from "react";
import Form from "./components/form/Form.components";
import TodoList from "./components/todo-list/TodoList.component";
import TodoData from "./components/todo-data/TodoData.component";
import { ITodoItem } from "./type";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const handleAddTodo = (item: ITodoItem) => {
    setTodos((prev) => [...prev, item]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Form onSubmit={handleAddTodo} />
      <TodoData items={todos} />
      <TodoList items={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
