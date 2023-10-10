import React from "react";

import "./css/AnswerStyle.css";

function Answer(props) {
	return (
		<div className="col-md-6 mb-2 mt-1 mb-sm-3 mt-sm-2 mt-md-3">
			<button
				onClick={props.onClick}
				className="answer-container border-and-shadow col-6"
			>
				{props.text}
			</button>
		</div>
	);
}

export default Answer;
