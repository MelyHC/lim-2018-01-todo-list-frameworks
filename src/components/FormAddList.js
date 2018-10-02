import React from 'react';

class FromAddList extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlClear = this.handlClear.bind(this);
  }

  handleAdd() {
    if (this.textInput.value.trim().length !==0) {
      this.props.addIngredient(this.textInput.value)
    } else {
      alert('Escribe un ingrediente :)')
    }
  }

  handlClear() {
    this.textInput.value = '';
  }

  render() {
    return (
      <div>
        <input
          ref={input => { this.textInput = input }}
          type="text"></input>
        <i className="fas fa-plus" onClick={this.handleAdd}></i>|
        <i className="far fa-trash-alt" onClick={this.handlClear}></i>
      </div>
    )
  }
}

export default FromAddList;