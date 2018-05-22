import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.state = {
      todos: [],
      title: "My first React App",
      count: 0
    };
  }

  addTodo = event => {
    event.preventDefault();
    let task = this.refs.name.value;
    let check = this.refs.completed.value;
    let count = this.state.count;

    let todo = {
      task,
      check,
      count
    };
    count += 1;
    let todos = this.state.todos;

    todos.push(todo);

    this.setState({
      todos: todos,
      count: count
    });

    this.refs.todoForm.reset();
  };

  deleteTodo = index => {
    let todos = this.state.todos;

    let todo = todos.find(todo => {
      return todo.count === index;
    });
    todos.splice(todo, 1);

    this.setState({
      todos: todos
    });
  };

  render() {
    let todos = this.state.todos;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> {this.state.title} </h1>
        </header>
        <div className="container">
          <form ref="todoForm">
            <h1> {this.state.todo} </h1>
            <input type="text" ref="name" placeholder="todos name" />
            <input type="text" ref="completed" placeholder="finished or not?" />
            <button onClick={this.addTodo}> Add Todo </button>
          </form>
          <ul>
            {todos.map(todo => (
              <li key={todo.count}>
                {todo.task}
                <button onClick={this.deleteTodo.bind(null, todo.count)}>
                  Delete Todo
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
