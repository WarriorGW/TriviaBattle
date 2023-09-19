import React from "react";
import ProgressBar from "../components/ProgressBar";

import "./css/InGameStyle.css";
import Answer from "../components/Answer";

function InGame() {
	return (
		<>
			<div className="d-flex mx-2 my-3">
				<ProgressBar />
			</div>
			<div className="container">
				<div className="box-ingame col-12 d-flex border-and-shadow align-content-center justify-content-center">
					<h2 className="question-title mt-5">Aqui estaran las preguntas</h2>
					<div className="d-flex mt-5 row-answer">
						<Answer text="Respuesta 1" />
						<Answer text="Respuesta 2" />
					</div>
					<div className="d-flex my-5">
						<Answer text="Respuesta 3" />
						<Answer text="Respuesta 4" />
					</div>
				</div>
				<div>
					<p>Aqui estaran los puntajes</p>
				</div>
			</div>
		</>
	);
}

export default InGame;
