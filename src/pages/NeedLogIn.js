import React from "react";

import Profile from "../assets/home/test-profile.svg";

import LinkCard from "../components/LinkCard";

function NeedLogIn() {
	return (
		<div className="container my-5 mx-auto">
			<div className="d-flex flex-wrap text-center justify-content-center">
				<div className="w-100">
					<h1 className="home-title">Necesitas inicar sesion para jugar</h1>
				</div>
				<LinkCard to="/LogIn" image={Profile} text="LogIn" />
			</div>
		</div>
	);
}

export default NeedLogIn;
