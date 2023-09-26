import React from "react";
import ProgressBar from "../components/ProgressBar";

import Answer from "../components/Answer";
import "./css/InGameStyle.css";
import UsersScore from "../components/UsersScore";

function InGame() {
	return (
		<>
			<div className="d-flex mx-2 my-3">
				<ProgressBar />
			</div>
			<div className="container">
				<div className="row justify-content-center align-content-center">
					<div className="box-ingame mt-md-5 col-10 d-flex border-and-shadow px-5 py-md-5 justify-content-center align-content-center">
						<div className="w-100">
							<div className="d-flex justify-content-center align-content-center">
								<h2 className="question-title">
									<>¿</>Cual es la capital de francia<>?</>
								</h2>
							</div>
							<div className="row w-100">
								<div className="col-md-6 mb-sm-3 mt-sm-3 mb-md-4 mt-md-5">
									<Answer text="Respuesta 1" />
								</div>
								<div className="col-md-6 mb-sm-3 mt-sm-3 mb-md-4 mt-md-5">
									<Answer text="Respuesta 2" />
								</div>
								<div className="col-md-6 mb-sm-3 mt-sm-3 mt-md-3">
									<Answer text="Respuesta 3" />
								</div>
								<div className="col-md-6 mb-sm-3 mt-sm-3 mt-md-3">
									<Answer text="Respuesta 4" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-scores">
				<div className="row">
					<div className="col-4 m-0 p-0">
						<UsersScore name="Fernando" score="100" />
					</div>
					<div className="col-4 m-0 p-0">
						<UsersScore name="Chino" score="100" />
					</div>
					<div className="col-4 m-0 p-0">
						<UsersScore name="SAI" score="100" />
					</div>
					<div className="col-4 m-0 p-0">
						<UsersScore name="Johann" score="100" />
					</div>
					<div className="col-4 m-0 p-0">
						<UsersScore name="Paula" score="100" />
					</div>
					<div className="col-4 m-0 p-0">
						<UsersScore name="Faby" score="100" />
					</div>
				</div>
			</div>
		</>
	);
}

export default InGame;
