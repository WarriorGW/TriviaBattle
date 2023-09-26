import React from "react";
import "./css/UsersScoreStyle.css";

function UsersScore(props) {
	return (
		<div className="user-score-container d-flex border-and-shadow mb-3 mb-md-4 mx-1">
			<p className="m-0">
				{props.score} ● {props.name}
			</p>
		</div>
	);
}

export default UsersScore;
