import React from "react";
import ProgressBar from "../components/ProgressBar";

function InGame() {
	return (
		<div className="container">
			<div className="d-flex">
				<ProgressBar />
			</div>
			<h1>Sala de ...</h1>
			<div>
				<p>Aqui estaran las preguntas</p>
			</div>
			<div>
				<p>Aqui estaran los puntajes</p>
			</div>
		</div>
	);
}

export default InGame;
