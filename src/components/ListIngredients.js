import React from 'react';

const ListIngredients = ({ ingredient, id, cross, remove, current }) => {
  return (
    <div id={id} className="margin display-flex">
      <span className={current ? "croos-out" : null}>{ingredient}</span>
        <i className="fas fa-check border-right" onClick={() => cross(id)}></i>
        <i className="far fa-trash-alt" onClick={() => remove(id)}></i>
    </div>
  )
}

export default ListIngredients;