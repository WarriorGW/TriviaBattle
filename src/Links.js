import React from "react";
import { Link } from "react-router-dom";

import Controller from "./assets/home/controller.svg";
import Profile from "./assets/home/user.svg";
import LeaderBoard from "./assets/home/trophy.svg";
import Admin from "./assets/home/admin.svg";
import AddQuestion from "./assets/home/add-question.svg";

function Links() {
	return (
		<>
			<div className="container d-flex flex-wrap text-center">
				<div className="w-100">
					<h1>Menu de inicio</h1>
				</div>
				<Link to="/Juego" className="d-flex flex-column m-4">
					<img width="128" height="128" src={Controller} alt="Start Game" />
					Juego
				</Link>
				<Link to="/Register" className="d-flex flex-column m-4">
					<img width="128" height="128" src={Profile} alt="Registrarse" />
					Register
				</Link>
				<Link to="/LogIn" className="d-flex flex-column m-4">
					<img width="128" height="128" src={Profile} alt="Iniciar sesion" />
					LogIn
				</Link>
				<Link to="/profile" className="d-flex flex-column m-4">
					<img width="128" height="128" src={Profile} alt="Perfil" />
					Perfil
				</Link>
				<Link to="/AddQuestion" className="d-flex flex-column m-4">
					<img width="128" height="128" src={AddQuestion} alt="Agregar nueva" />
					Agregar pregunta
				</Link>
				<Link to="/WorldScore" className="d-flex flex-column m-4">
					<img width="128" height="128" src={LeaderBoard} alt="Puntajes" />
					Puntaje Global
				</Link>
				<Link to="/Tables" className="d-flex flex-column m-4">
					<img width="128" height="128" src={Admin} alt="Tablas" />
					Tables
				</Link>
			</div>
		</>
	);
}

export default Links;
