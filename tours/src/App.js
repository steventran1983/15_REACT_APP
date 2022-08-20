import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    try {
      const res = await fetch(url);
      const tours_data = await res.json();
      setTours(tours_data);
    } catch (error) {
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    console.log("This is Remove Tour function");
    const toursTemp = tours.filter((tour) => tour.id != id);
    setTours(toursTemp);
  };

  useEffect(() => {
    getTours();
    setLoading(false);
  }, []);
  // console.log(tours);
  console.log(loading);

  if (loading) {
    <div className="App">
      return <Loading />
    </div>;
  }

  return (
    <div className="App">
      <h1>This is Main App</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
