import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./data";
import Review from "./Review";

function App() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];

  const handleNext = () => {
    console.log("This is handNext function");
    const arrLength = data.length;
    if (index >= arrLength - 1) {
      setIndex(arrLength - 1);
    } else {
      setIndex(index + 1);
    }
  };

  const handleBack = () => {
    console.log("This is back function");
    if (index == 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  };

  const handleSpriteMe = () => {
    const randomNumber = Math.floor(Math.random() * (data.length + 1));
    console.log(randomNumber);
    if (randomNumber == 0) {
      setIndex(0);
    } else {
      for (let i = 0; i < randomNumber; i++) {
        setIndex((pre) => i);
      }
    }
  };

  return (
    <main>
      <h1>This is function App</h1>
      <section>
        <article>
          <img src={image} alt={name} style={{ width: 300 }}></img>
          <h2>{name}</h2>
          <h3>Job Title: {job}</h3>
          <p>{text}</p>
        </article>
      </section>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleSpriteMe}>Sprite Me</button>
    </main>
  );
}

export default App;
