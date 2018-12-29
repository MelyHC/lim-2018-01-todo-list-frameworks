import React from 'react';

const FromAddList = ({ addIngredient, removeCross }) => {
  return (
    <div>
      <input type="text" ref={input => { this.textInput = input }} />
      <i className="fas fa-plus border-right" onClick={() => addIngredient(this.textInput)}></i>
      <i className="far fa-trash-alt" onClick={removeCross}></i>
    </div>
  )
}

export default FromAddList;