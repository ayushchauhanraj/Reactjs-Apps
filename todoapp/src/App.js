import React, { Component } from "react";
import Todo from "./Todo";
import AddForm from "./AddForm";

class App extends Component {
  state = {
    todo: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" },
    ],
  };

  deleteTodo = (id) => {
    const todo = this.state.todo.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todo,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todo, todo];
    this.setState({
      todo: todos,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todo todos={this.state.todo} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
