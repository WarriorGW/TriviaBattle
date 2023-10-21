import React from "react";
import { Link } from "react-router-dom";

import "./css/LinkCardStyle.css";

function LinkCard(props) {
	return (
		<Link to={props.to} className="m-4">
			<div className="link-card d-flex flex-column">
				<img width="128" height="128" src={props.image} alt={props.text} />
				<h2>{props.text}</h2>
			</div>
		</Link>
	);
}

export default LinkCard;
