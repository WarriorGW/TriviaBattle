import React from "react";
import { Link } from "react-router-dom";

function Tables() {
	return (
		<>
			<div className="container">
				<h1>Tablas</h1>
				<Link to="/Tables/users">AllUsers</Link>
				<br />
				<Link to="/Tables/users/:id">OneUser</Link>
				<br />
				<Link to="/Tables/questions">AllQuestions</Link>
				<br />
				<Link to="/Tables/questions/:id">OneQuestion</Link>
			</div>
		</>
	);
}

export default Tables;
