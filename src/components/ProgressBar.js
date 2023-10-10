import React from "react";
import "./css/ProgressBarStyle.css";

function ProgressBar(props) {
	return (
		<div className="d-flex mx-2 my-3">
			<span className="progress-container d-flex">
				<span
					className="progress-inside"
					style={{ width: `${props.progress}%` }}
				></span>
			</span>
		</div>
	);
}

export default ProgressBar;
