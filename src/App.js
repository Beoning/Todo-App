import "./App.css";
import React, { memo } from "react";
import useInputValue from "./Custom-hooks/useInputValue";
import useTodos from "./Custom-hooks/useTodos";
import Layout from "./Components/Layout";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
const TodoApp = memo((props) => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();
  const clearInputAndAddTodo = (_) => {
    clearInput();
    addTodo(inputValue);
  };
  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={(idx) => checkTodo(idx)}
        onItemRemove={(idx) => removeTodo(idx)}
      />
    </Layout>
  );
});

export default TodoApp;
