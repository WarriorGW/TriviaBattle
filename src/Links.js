import React from "react";
import { Link } from "react-router-dom";

import LinkCard from "./components/LinkCard";

import Controller from "./assets/home/game-controller.svg";
import Profile from "./assets/home/test-profile.svg";
import LeaderBoard from "./assets/home/trhophy.svg";
import Admin from "./assets/home/security.svg";
import AddQuestion from "./assets/home/add.svg";

import useAuthStore from "./context/AuthStore";

function Links() {
	const authUsername = useAuthStore((state) => state.authUsername);
	const authRole = useAuthStore((state) => state.authRole);

	let hasPermission = parseInt(authRole, 10) === 1 ? true : false;
	return (
		<>
			<div className="container d-flex flex-wrap text-center justify-content-center">
				<div className="w-100">
					<h1>Menu de inicio</h1>
				</div>
				<Link to="/Juego" className="d-flex flex-column m-4">
					<img width="128" height="128" src={Controller} alt="Start Game" />
					Juego
				</Link>
				{authUsername ? (
					<></>
				) : (
					<Link to="/Register" className="d-flex flex-column m-4">
						<img width="128" height="128" src={Profile} alt="Registrarse" />
						Register
					</Link>
				)}
				{authUsername ? (
					<></>
				) : (
					<Link to="/LogIn" className="d-flex flex-column m-4">
						<img width="128" height="128" src={Profile} alt="Iniciar sesion" />
						LogIn
					</Link>
				)}
				{!authUsername ? (
					<></>
				) : (
					<Link to="/profile" className="d-flex flex-column m-4">
						<img width="128" height="128" src={Profile} alt="Perfil" />
						Perfil
					</Link>
				)}
				{hasPermission ? (
					<Link to="/AddQuestion" className="d-flex flex-column m-4">
						<img
							width="128"
							height="128"
							src={AddQuestion}
							alt="Agregar nueva"
						/>
						Nueva pregunta
					</Link>
				) : (
					<></>
				)}
				<Link to="/WorldScore" className="d-flex flex-column m-4">
					<img width="128" height="128" src={LeaderBoard} alt="Puntajes" />
					Puntaje Global
				</Link>
				{hasPermission ? (
					<Link to="/Tables" className="d-flex flex-column m-4">
						<img width="128" height="128" src={Admin} alt="Tablas" />
						Tables
					</Link>
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default Links;
