import React, { useState } from 'react';

function NutritionTracking() {
  const [foodItems, setFoodItems] = useState([]);
  const [newFood, setNewFood] = useState({
    name: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFoodItems([...foodItems, newFood]);
    setNewFood({
      name: '',
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    });
  };

  return (
    <div>
      <h1>Nutritional Tracking</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={newFood.name} onChange={handleChange} />
        <label>Calories:</label>
        <input type="number" name="calories" value={newFood.calories} onChange={handleChange} />
        <label>Protein (g):</label>
        <input type="number" name="protein" value={newFood.protein} onChange={handleChange} />
        <label>Carbs (g):</label>
        <input type="number" name="carbs" value={newFood.carbs} onChange={handleChange} />
        <label>Fat (g):</label>
        <input type="number" name="fat" value={newFood.fat} onChange={handleChange} />
        <button type="submit">Add Food</button>
      </form>
      <h2>Food Log</h2>
      <ul>
        {foodItems.map((food, index) => (
          <li key={index}>
            {food.name} - Calories: {food.calories}, Protein: {food.protein}g, Carbs: {food.carbs}g, Fat: {food.fat}g
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NutritionTracking;