import React from "react";

import { Link } from "react-router-dom";

import useAuthStore from "../context/AuthStore";

function Profile() {
	const authLogOut = useAuthStore((state) => state.authLogout);
	const authImg = useAuthStore((state) => state.authImg);
	return (
		<div className="card-form-user">
			{authImg ? (
				<img src={require(`../assets/profiles/${authImg}.png`)} alt="Profile" />
			) : (
				<img
					src={require(`../assets/profiles/user-default.png`)}
					alt="Profile"
				/>
			)}
			<br />
			<Link to="/ChangeUsername">Cambiar username</Link>
			<br />
			<Link to="/ChooseProfileImg">Seleccionar foto de perfil</Link>
			<br />
			<button className="button-purple send-button-user" onClick={authLogOut}>
				Cerrar sesion
			</button>
		</div>
	);
}

export default Profile;
