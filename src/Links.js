import React from "react";
import { Link } from "react-router-dom";

function Links() {
	return (
		<>
			<div className="container">
				<h1>Sala de home?</h1>
				<Link to="/Juego">Juego</Link>
				<br />
				<Link to="/Register">Register</Link>
				<br />
				<Link to="/LogIn">LogIn</Link>
				<br />
				<Link to="/WorldScore">Puntaje Global</Link>
				<br />
				<Link to="/AddQuestion">Agregar pregunta</Link>
				<br />
				<Link to="/WaitRoom">Crear sala</Link>
				<br />
				<Link to="/ChangeUsername">Cambiar username</Link>
				<br />
				<Link to="/TableQuestions">TableQuestions</Link>
			</div>
		</>
	);
}

export default Links;
