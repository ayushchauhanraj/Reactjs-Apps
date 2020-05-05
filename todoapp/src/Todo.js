import React from "react";

/* react component div must have a unique key which it identify uniquely */
/* { todos, deleteTodo } this is de-structuring  */
const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todos.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todos list ,yup!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todo;
