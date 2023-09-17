import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/ButtonNavStyle.css";

function ButtonNav(props) {
	const navigate = useNavigate();
	return (
		<button
			className="button-nav border-and-shadow"
			onClick={() => {
				navigate(props.to);
			}}
		>
			{props.textInside}
		</button>
	);
}

export default ButtonNav;
