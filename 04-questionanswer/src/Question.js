import { useState } from "react";

const Question = ({ id, title, info }) => {
  const [showanswer, setShowanswer] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowanswer(!showanswer)} className="btn">
          {showanswer ? "B" : "A"}
        </button>
      </header>

      {showanswer && <p>{info}</p>}
    </article>
  );
};

export default Question;
