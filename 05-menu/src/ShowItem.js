import menu from "./Data";
import { useState } from "react";

const ShowItem = ({ items }) => {
  //   console.log(items);

  return (
    <div>
      <h1>This is show Iteam component</h1>
      {items.map((item) => (
        <article key={item.id}>
          <img src={item.img}></img>
          <h3>{item.title}</h3>
          <h4>price: {item.price}</h4>
          <p>{item.desc}</p>
        </article>
      ))}
    </div>
  );
};

export default ShowItem;

// shakes;lunch;
