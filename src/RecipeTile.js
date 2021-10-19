import React from 'react';

function RecipeTile(props) {
  return (
    <div className="tiles">
      <img src={props.image} />
      <h3>{props.name}</h3>
      <h5>Category: {props.category}</h5>
    </div>
  );
}

export default RecipeTile;
