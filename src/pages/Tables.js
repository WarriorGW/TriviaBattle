import React from "react";

import LinkCard from "../components/LinkCard";

import users from "../assets/tables/users.svg";
import questions from "../assets/tables/questions.svg";

function Tables() {
	return (
		<>
			<div className="container d-flex flex-wrap text-center justify-content-center">
				<div className="w-100">
					<h1 className="home-title my-1 my-md-4">Tablas</h1>
				</div>
				<LinkCard to="/Tables/users" image={users} text="Usuarios" />
				<LinkCard to="/Tables/questions" image={questions} text="Preguntas" />
			</div>
		</>
	);
}

export default Tables;
