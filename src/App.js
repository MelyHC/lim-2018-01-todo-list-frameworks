import React, { Component, Fragment } from 'react';
import './App.css';
import FormAddList from './components/FormAddList';
import ListIngredients from './components/ListIngredients';

class App extends Component {
  state = {
    list: [
      {
        ingredient: 'Tarea de mate',
        currentToDo: false
      },
      {
        ingredient: 'Comprar comida',
        currentToDo: false
      }
    ]
  }

  addIngredient = (ingredient) => {
    const { list } = this.state;

    if (ingredient.value.trim().length !== 0) {
      list.push({
        ingredient: ingredient.value,
        currentToDo: false
      })

      ingredient.value = '';
      ingredient.focus();
    } else {
      alert('Escribe una tarea :)');
      ingredient.focus();
    }

    this.setState({ list });
  }

  removeIngredient = (id) => {
    const { list } = this.state;
    list.splice(id, 1);
    this.setState({ list });
  }

  crossIngredient = (id) => {
    const { list } = this.state;
    list[id].currentToDo = !list[id].currentToDo;
    this.setState({ list })
  }

  removeCrossIngredient = () => {
    const { list } = this.state;
    const ingredientsNoCross = list.filter(({ currentToDo }) => currentToDo === false);
    this.setState({ list: ingredientsNoCross });
  }

  render() {
    const { list } = this.state;

    return (
      <Fragment>
        <header>
          <h1 className="">To-Do List</h1>
        </header>
        <section>
          <h4 className="margin-b">Agrega una tarea</h4>
          <FormAddList
            addIngredient={this.addIngredient}
            removeCross={this.removeCrossIngredient}
          />
        </section>
        {list.map(({ ingredient, currentToDo }, id) => {
          return (
            <ListIngredients
              ingredient={ingredient}
              id={id}
              key={id}
              current={currentToDo}
              cross={this.crossIngredient}
              remove={this.removeIngredient}
            />
          )
        })}
      </Fragment>
    );
  }
}

export default App;
