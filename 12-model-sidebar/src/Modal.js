import React from "react";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "./context";

const Modal = () => {
	const { closeModal, isModalShow } = useContext(AppContext);
	return (
		<div
			className={`${
				isModalShow ? "modal-overlay show-modal" : "modal-overlay"
			}`}
		>
			<div className="modal-container">
				<h3>modal content</h3>
				<button className="close-modal btn" onClick={closeModal}>
					<FaTimes />
				</button>
			</div>
		</div>
	);
};

export default Modal;
