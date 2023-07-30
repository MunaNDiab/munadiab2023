
import React from 'react';

function FoodsAndDrinks() {
  const drinks = ['lemonade', 'soda', 'tea', 'water'];
  const foods = ['beans', 'chicken', 'rice'];

  return (
    <div>
      <h1>Drinks</h1>
      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>{drink}</li>
        ))}
      </ul>

      <h1>Foods</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
}

export default FoodsAndDrinks;