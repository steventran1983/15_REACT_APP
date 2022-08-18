import logo from "./logo.svg";
import "./App.css";

import data from "./data";
import Card from "./Card";
import { useState } from "react";

function App() {
  console.log(data);
  const [users, setUsers] = useState(data);
  const handleRemove = () => {
    console.log("Testing remove");
    setUsers([]);
  };
  return (
    <div className="App">
      <main className="cointainer">
        <h1>Number of User today {users.length}</h1>
        <Card users={users} />
        <button onClick={handleRemove}> Remove All Users</button>
      </main>
    </div>
  );
}

export default App;
