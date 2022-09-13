import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../logo.svg";
import { links, social } from "../data";

function Navbar() {
	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo}></img>
					<button className="nav-toggle">
						<FaBars />
					</button>
				</div>
			</div>
			<div className="links-container show-container">
				<ul>
					{links.map((link) => {
						const { id, url, text } = link;
						return <li key={id}>{text}</li>;
					})}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
