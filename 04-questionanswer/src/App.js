import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import Question from "./Question";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions And Answer About Login</h3>
        <section className="info">
          {questions.map((question, index) => (
            <Question key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
