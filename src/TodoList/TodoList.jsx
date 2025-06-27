const TodoList = ({ todo, setTodo }) => {
  function addTick(index) {
    const updatedTodos = [...todo];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    const [movedItem] = updatedTodos.splice(index, 1);
    updatedTodos.push(movedItem);
    setTodo(updatedTodos);
  }

  function deleteTodo(index) {
    const updatedTodos = todo.filter((_, i) => i != index);
    setTodo(updatedTodos);
  }
  return (
    <div>
      <div className="main">
        <section className="todos">
          <ul>
            {todo.map((item, index) => (
              <li className="input" key={index}>
                <span
                  onClick={() => addTick(index)}
                  className={item.completed ? "underline" : null}
                >
                  {item.text}
                </span>
                <button onClick={() => deleteTodo(index)}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TodoList;
