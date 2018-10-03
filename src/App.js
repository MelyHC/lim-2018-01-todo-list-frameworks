import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormAddList from './components/FormAddList';
import ListIngredients from './components/ListIngredients';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, ingredient: 'leche', currentToDo: false },
        { id: 2, ingredient: 'azucar', currentToDo: false }
      ]
    }
    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
  }

  addIngredient(ingredient) {
    const { list } = this.state;
    list.push({
      id: list.length + 1,
      ingredient,
      currentToDo: false
    })
    this.setState({ list });
  }

  removeIngredient (id) {
    id.remove();
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">To-Do List<img src={logo} className="App-logo" alt="logo" /></h1>
        <p>Ingredientes para un keke</p>
        <FormAddList
          addIngredient={this.addIngredient} />
        {this.state.list.map(ingredient => {
          return (
            <ListIngredients
              ingredient={ingredient.ingredient}
              idIngredient={ingredient.id}
              key={ingredient.id}
              cross={ingredient.currentToDo}
              remove={this.removeIngredient}
               />
          )
        })}
      </div>
    );
  }
}

export default App;
