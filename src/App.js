import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

function getRandomAnimals() {
  const animals = ['bird', 'cat', 'gator', 'horse', 'cow', 'dog'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="container">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}
export default App;
