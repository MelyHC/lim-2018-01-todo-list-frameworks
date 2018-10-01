import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormAddList from './components/FormAddList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do List</h1>
          <p>Ingredientes para un keke</p>
        </header>
        <FormAddList />
      </div>
    );
  }
}

export default App;
