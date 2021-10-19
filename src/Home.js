import React, { useState } from 'react';
import Header from './Header';
import RecipeTile from './RecipeTile';

let iol;

function Home() {
  const [searcVal, setsearchVal] = useState('');
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState(null);
  const [newList, setnewList] = useState();

  //Fetch Data
  async function getData(name) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await res.json();

    let listOfRecipes = data.meals;
    //console.log(data.meals)

    iol = listOfRecipes.map((item) => {
      return (
        <RecipeTile
          category={item.strCategory}
          image={item.strMealThumb}
          name={item.strMeal}
        />
      );
    });
    setLoading(false);
    console.log(iol);
  }

  function handleInput(e) {
    //console.log(e.target.value)
    setsearchVal(e.target.value);
  }

  return (
    <div>
      <Header func1={handleInput} func2={() => getData(searcVal)} />
      <div className='items-cont'>
        {loading ? <p style={{display:'none'}}></p> : <div>{iol}</div>}
      </div>
    </div>
  );
}

export default Home;
