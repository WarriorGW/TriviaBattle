import React from "react";

import Profile from "../assets/home/user.svg";

import { Link } from "react-router-dom";

function NeedLogIn() {
	return (
		<div className="container my-5 mx-auto">
			<div className="d-flex flex-wrap text-center justify-content-center">
				<div className="w-100">
					<h1>Necesitas inicar sesion para continuar</h1>
				</div>
				<Link to="/LogIn" className="d-flex flex-column m-4">
					<img width="128" height="128" src={Profile} alt="Iniciar sesion" />
					LogIn
				</Link>
			</div>
		</div>
	);
}

export default NeedLogIn;
