import React from "react";

const Input = ({ input, setInput, setTodo, todo }) => {
  function addInput(e) {
    setInput(e.target.value);
  }
  function addTodo(e) {
    e.preventDefault();
    setTodo([...todo, { text: input, completed: false }]);
    setInput("");
  }
  return (
    <div className="main">
      <form action="" className="input">
        <input
          type="text"
          onChange={addInput}
          value={input}
          placeholder="Add Todos..."
        />
        <button type="submit" onClick={addTodo}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
