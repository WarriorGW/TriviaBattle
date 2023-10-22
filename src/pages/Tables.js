import React from "react";

import LinkCard from "../components/LinkCard";

import users from "../assets/tables/users.svg";
import questions from "../assets/tables/questions.svg";

function Tables() {
	return (
		<>
			<div className="container d-flex flex-wrap text-center justify-content-center">
				<div className="w-100">
					<h1>Tablas</h1>
				</div>
				{/* <Link to="/Tables/users" className="d-flex flex-column m-4">
					<img width="128" height="128" src={users} alt="users table" />
					AllUsers
				</Link> */}
				<LinkCard to="/Tables/users" image={users} text="Usuarios" />
				{/* <Link to="/Tables/questions" className="d-flex flex-column m-4">
					<img width="128" height="128" src={questions} alt="questions table" />
					AllQuestions
				</Link> */}
				<LinkCard to="/Tables/questions" image={questions} text="Preguntas" />
			</div>
		</>
	);
}

export default Tables;
