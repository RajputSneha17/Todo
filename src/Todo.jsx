import React, { useState } from "react";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import TodoList from "./TodoList/TodoList";
import "./TodoList.css";
import Input from "./Input/Input";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div>
      <NavBar />
      <Input input={input} setInput={setInput} setTodo={setTodo} todo={todo} />
      <TodoList todo={todo} setTodo={setTodo} />
      <Footer todo={todo} />
    </div>
  );
};

export default Todo;
