import React from "react";

import "./css/AnswerStyle.css";

function Answer(props) {
	return (
		<button className="answer-container border-and-shadow col-6 d-flex">
			{props.text}
		</button>
	);
}

export default Answer;
