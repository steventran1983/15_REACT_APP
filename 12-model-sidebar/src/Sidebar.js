import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
	const { closeSidebar, isSidebarShow } = useGlobalContext();
	return (
		<aside
			className={`${isSidebarShow ? "sidebar show-sidebar" : "sidebar"}`}
		>
			<h2>This is the Sidebar</h2>
			<button onClick={closeSidebar}>
				<FaTimes />
			</button>
		</aside>
	);
};

export default Sidebar;
