import React from 'react';

class FromAddList extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text"></input>
          <i className="fas fa-plus"></i>|
          <i className="far fa-trash-alt"></i>
        </form>
      </div>
    )
  }
}

export default FromAddList;