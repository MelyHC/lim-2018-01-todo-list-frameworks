import React from 'react';

class ListIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.ingredient = props.ingredient;
    this.idIngredient = props.id;
    this.handleCrossOut = this.handleCrossOut.bind(this);
  }

  handleCrossOut(e) {
    console.log(e.target.name)
    if (e.target.name === 'croos') {
      if (this.textIngredient.style.textDecoration === 'line-through') {
        this.textIngredient.classList.remove('croosOut')
      } else {
        this.textIngredient.classList.add('croosOut')
      }
    }
  }

  render() {
    return (
      <div onClick={this.handleCrossOut}>
        <span
          ref={span => { this.textIngredient = span }}
          id={this.idIngredient}>{this.ingredient}</span>
        <i className="fas fa-check" name="croos"></i> |
        <i className="far fa-trash-alt" name="remove"></i>
      </div>
    )
  }
}

export default ListIngredients;