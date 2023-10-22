import React from "react";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthStore from "../context/AuthStore";

function Profile() {
	const navigate = useNavigate();
	const authLogOut = useAuthStore((state) => state.authLogout);
	const authImg = useAuthStore((state) => state.authImg);
	const authUsername = useAuthStore((state) => state.authUsername);
	const handleLogout = () => {
		Swal.fire({
			text: "¿Cerrar sesión?",
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "Sí, cerrar sesión",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				// Si el usuario confirma la acción, llama a la función de cierre de sesión
				authLogOut();
				navigate("/");
			}
		});
	};
	return (
		<div className="container-form-user">
			<div className="card-form-user">
				{authImg ? (
					<img
						src={require(`../assets/profiles/${authImg}.png`)}
						alt="Profile"
					/>
				) : (
					<img
						src={require(`../assets/profiles/user-default.png`)}
						alt="Profile"
					/>
				)}
				<br />
				{authUsername ? (
					<h3 className="my-3">{authUsername}</h3>
				) : (
					<h3>No has iniciado sesion</h3>
				)}
				<Link to="/ChangeUsername">Cambiar username</Link>
				<br />
				<Link to="/ChooseProfileImg">Seleccionar foto de perfil</Link>
				<br />
				<button
					className="button-purple send-button-user"
					onClick={handleLogout}
				>
					Cerrar sesion
				</button>
			</div>
		</div>
	);
}

export default Profile;
