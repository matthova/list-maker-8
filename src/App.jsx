/* global fetch */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentWillMount() {
    if (require('is-browser')) {
      fetch('/api/todo')
        .then(reply => reply.json())
        .then(todos => this.setState({ todos }));
    }
  }

  todoList() {
    return (
      <div>
        {this.state.todos.map(todo => <p key={todo.id}>{todo.description}</p>)}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Switch>
          <Route exact path="/" render={() => { return this.todoList() }} />
          <Route path="/cool" render={() => <h1>cool</h1>} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
