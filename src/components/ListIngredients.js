import React from 'react';

class ListIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.ingredient = props.ingredient;
    this.idIngredient = props.id;
    this.currentToDo = props.croos;
    this.handleCrossOut = this.handleCrossOut.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleCrossOut(e) {
    if (e.target.id === 'croos') {
      if (this.currentToDo) {
        this.textIngredient.classList.remove('croosOut');
        this.currentToDo = false;
      } else {
        this.textIngredient.classList.add('croosOut');
        this.currentToDo = true;
      }
    } else if (e.target.id === 'remove') {
      console.log(e);

    }
  }

  handleRemove() {
    this.props.remove(this.deleteDiv)
  }

  render() {
    return (
      <div
        onClick={this.handleCrossOut}
        id={this.idIngredient}
        ref={div => { this.deleteDiv = div }}>
        <span
          ref={span => { this.textIngredient = span }}
        >{this.ingredient}</span>
        <i className="fas fa-check" id="croos"></i> |
        <i className="far fa-trash-alt" onClick={this.handleRemove}></i>
      </div>
    )
  }
}

export default ListIngredients;