import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation.js';

import TodoForm from './components/TodoForm.js'

import { todos } from './todos.json';
console.log(todos);


class App extends Component {
  constructor(){
    super();//para heredar la funcional del componente de react
    this.state = {//se administra en memoria p mostrar en pantalla
    todos: todos
    }
  }

  render() {



    const TODOS = this.state.todos.map((todo, i) => {
      return (
        <div className= "col-md-4">
          <div className="card mt-4">
              <div className='card-header'>
                <h3> {todo.title} </h3>
                <span className= "badge badge-pill badge-danger ml-2"> {todo.priority} </span>
              </div>
              <div className= "card-body">
              <p> {todo.description} </p>
              <p> {todo.responsible} </p>
              </div>
          </div>
        </div>

      )
    });

    return (
      <div className="App">

      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white"> Tasks
            <span className="badge badge-pill badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
        </a>
      </nav>

      <h1 className="display 1"> TAREAS PENDIENTES </h1>


      <div className= "container">
      <TodoForm />
        <div className="row mt-4">
            { TODOS }
        </div>
      </div>


      <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;