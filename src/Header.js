import React from 'react';

function Header(props) {
  return (
    <div className='header'>
      <h1>Recipes</h1>
      <div >
        <input type="text" placeholder="Search..." onChange={props.func1} />
        <button onClick={props.func2}>Search</button>
      </div>
    </div>
  );
}

export default Header;
