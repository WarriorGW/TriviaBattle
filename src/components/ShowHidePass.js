import React from "react";
import "./css/ShowHidePassStyle.css";

import eye from "../assets/eye-solid.svg";
import eyeSlash from "../assets/eye-slash-solid.svg";

function ShowHidePass(props) {
	function showHide(passwordInputId) {
		let passwordInput = document.getElementById(passwordInputId);
		if (passwordInput.type === "password") {
			passwordInput.type = "text";
			document.getElementById(`eye-${props.eyeId}`).style.display = "none";
			document.getElementById(`eye-slash-${props.eyeId}`).style.display =
				"inline";
		} else {
			passwordInput.type = "password";
			document.getElementById(`eye-${props.eyeId}`).style.display = "inline";
			document.getElementById(`eye-slash-${props.eyeId}`).style.display =
				"none";
		}
	}
	return (
		<div className="container-showhide">
			<img
				alt="Show password"
				className="eye"
				id={`eye-${props.eyeId}`}
				src={eye}
				onClick={() => showHide(props.passwordInputId)}
				style={{ cursor: "pointer" }}
			/>
			<img
				alt="Hide password"
				className="eye-slash"
				id={`eye-slash-${props.eyeId}`}
				src={eyeSlash}
				style={{ display: "none", cursor: "pointer" }}
				onClick={() => showHide(props.passwordInputId)}
			/>
		</div>
	);
}

export default ShowHidePass;
