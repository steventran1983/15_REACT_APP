import { useState } from "react";
function Tour({ tour, removeTour }) {
  const [toggle, setToogle] = useState(true);
  const { id, name, info, image, price } = tour;
  console.log(removeTour);
  const readMore = () => {
    if (toggle) {
      return `${info.substring(0, 200)}...`;
    }
    return `${info}`;
  };

  const handleReadMore = () => {
    setToogle(!toggle);
  };

  return (
    <article>
      <div>
        <img src={image} alt={name}></img>
        <h2>{name}</h2>
        <p>{readMore()}</p>
        <button onClick={handleReadMore}>
          {toggle ? "Read More" : "Read Less"}
        </button>
        <h3>${price}</h3>
      </div>
      <div>
        <button onClick={() => removeTour(id)}>NOT INTERESTED</button>
      </div>
    </article>
  );
}

export default Tour;
