import React from "react";

const Footer = ({ todo }) => {
  return (
    <div>
      <footer>
        <h3>Total Todos : {todo.length}</h3>
        <h3>
          Completed Todos : {todo.filter((item) => item.completed).length}
        </h3>
      </footer>
    </div>
  );
};

export default Footer;
