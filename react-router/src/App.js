import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Project from "./components/Project";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/News">News</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
        <Route path="/News" element={<News />}></Route>
        <Route path="/Project" element={<Project />}></Route>
      </Routes>
    </div>
  );
}

export default App;
