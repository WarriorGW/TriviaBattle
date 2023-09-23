import React from "react";
import "./css/UsersScoreStyle.css";

function UsersScore(props) {
	return (
		<div className="user-score-container d-flex border-and-shadow justify-content-center align-content-center m-1">
			<p>{props.name}</p>
		</div>
	);
}

export default UsersScore;
