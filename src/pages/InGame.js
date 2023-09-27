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
					<div className="box-ingame mt-md-5 col-10 d-flex border-and-shadow px-5 py-3 py-md-5 justify-content-center align-content-center">
						<div className="w-100">
							<div className="d-flex justify-content-center text-center">
								<h2 className="question-title">
									<>¿</>Cual es la capital de francia<>?</>
								</h2>
							</div>
							<div className="row w-100 mx-auto">
								<div className="col-md-6 mb-2 mt-1 mb-sm-2 mt-sm-2 mb-md-3 mt-md-4">
									<Answer text="Bretaña" />
								</div>
								<div className="col-md-6 mb-2 mt-1 mb-sm-2 mt-sm-2 mb-md-3 mt-md-4">
									<Answer text="París" />
								</div>
								<div className="col-md-6 mb-2 mt-1 mb-sm-2 mt-sm-2 mt-md-3">
									<Answer text="Auvernia" />
								</div>
								<div className="col-md-6 mb-2 mt-1 mb-sm-2 mt-sm-2 mt-md-3">
									<Answer text="Lorraine" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-scores">
				<div className="row">
					<div className="col-4 m-0 p-0">
						<UsersScore name="Fernando" score="100" image="capybara" />
					</div>
					<div className="col-4 m-0 p-0">
						<UsersScore name="Chino" score="100" image="buho" />
					</div>
					<div className="col-4 m-0 p-0">
						<UsersScore name="SAI" score="100" image="caiman" />
					</div>
					<div className="col-4 m-0 p-0">
						<UsersScore name="Johann" score="100" image="bird" />
					</div>
					<div className="col-4 m-0 p-0">
						<UsersScore name="Paula" score="100" image="ciguena" />
					</div>
					<div className="col-4 m-0 p-0">
						<UsersScore name="Faby" score="100" image="delfin" />
					</div>
				</div>
			</div>
		</>
	);
}

export default InGame;
