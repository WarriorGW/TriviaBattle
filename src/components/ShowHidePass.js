import React from "react";
import "./css/ShowHidePassStyle.css";

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
			<i
				className="fa-solid fa-eye eye"
				id={`eye-${props.eyeId}`}
				onClick={() => showHide(props.passwordInputId)}
				style={{ cursor: "pointer" }}
			/>
			<i
				className="fa-solid fa-eye-slash eye-slash"
				id={`eye-slash-${props.eyeId}`}
				style={{ display: "none", cursor: "pointer" }}
				onClick={() => showHide(props.passwordInputId)}
			/>
		</div>
	);
}

export default ShowHidePass;