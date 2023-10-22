import React from "react";

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
				<div className="w-100 my-1 my-md-4">
					<h1 className="home-title">Menu de inicio</h1>
				</div>
				<LinkCard to="/Juego" image={Controller} text="Juego" />
				{authUsername ? (
					<></>
				) : (
					<LinkCard to="/Register" image={Profile} text="Registrarse" />
				)}
				{authUsername ? (
					<></>
				) : (
					<LinkCard to="/LogIn" image={Profile} text="LogIn" />
				)}
				{!authUsername ? (
					<></>
				) : (
					<LinkCard to="/profile" image={Profile} text="Perfil" />
				)}
				{hasPermission ? (
					<LinkCard
						to="/AddQuestion"
						image={AddQuestion}
						text="Nueva pregunta"
					/>
				) : (
					<></>
				)}
				<LinkCard to="/WorldScore" image={LeaderBoard} text="Puntajes" />
				{hasPermission ? (
					<LinkCard to="/Tables" image={Admin} text="Tablas" />
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default Links;
