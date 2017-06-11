import React, { Component } from 'react';

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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        { this.state.todos.map(todo => <p key={todo.id}>{todo.description}</p>)}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
