import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    const url = "https://course-api.com/react-tours-project";

    const res = await fetch(url);
    const tours_data = res.json();
    setTours(tours_data);
    setLoading(false);
  };

  useEffect(() => {
    getTours();
    setLoading(false);
  }, []);
  console.log(tours);
  console.log(loading);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="App">
      <h1>This is Main App</h1>
      <ul>
        {tours.map((tour, index) => (
          <li key={index}>{JSON.stringify(tour)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
