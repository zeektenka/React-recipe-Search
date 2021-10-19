import React from 'react';

function FetchItems() {
  return;
  (async function getData() {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=rice'
    );
    const data = await res.json();
    console.log(data.meals[0]);
  });
}

export default FetchItems;
