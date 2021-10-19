import React from 'react';

function RecipeTile(props) {
  return (
    <div className="tiles">
      <img src={props.image} />
      <h3>{props.name}</h3>
      <h4>Category: {props.category}</h4>
      <a href={props.source}>View Recipe</a>
    </div>
  );
}

export default RecipeTile;
