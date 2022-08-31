import { useState } from "react";
import Content from "./Content";
import text from "./data";

const Input = () => {
  const [value, setValue] = useState(0);
  const [paragraph, setParagraph] = useState([]);
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (value) => {
    console.log(value);
    console.log(`This is ${value}`);
    const finalArray = [];
    for (let i = 0; i < value; i++) {
      finalArray.push(text[i]);
    }
    setParagraph(finalArray);
  };
  console.log(paragraph);

  console.log(value);
  return (
    <section>
      <input placeholder="0" onChange={(e) => handleValue(e)}></input>
      <button onClick={() => handleSubmit(value)}>GENERATION</button>
      {paragraph.map((para, index) => (
        <p key={index}>
          {index + 1} - {para}
        </p>
      ))}
    </section>
  );
};

export default Input;
