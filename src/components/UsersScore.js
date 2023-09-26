import React from "react";
import "./css/UsersScoreStyle.css";

function UsersScore(props) {
	return (
		<div className="user-score-container d-flex border-and-shadow mb-3 mb-md-4 mx-1">
			<img
				width="25"
				height="25"
				src={require(`../assets/profiles/${props.image}.png`)}
			/>
			<p className="m-0">
				{props.name} ● {props.score}
			</p>
		</div>
	);
}

export default UsersScore;
