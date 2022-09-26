import logo from "./logo.svg";
import "./App.css";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
			</Routes>
		</div>
	);
}

export default App;
