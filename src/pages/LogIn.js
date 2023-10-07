import React from "react";
import { Formik, Form } from "formik";
import "./css/FormsUsersStyle.css";
import ShowHidePass from "../components/ShowHidePass";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
// Importar validaciones de usuario
import { vldtUser } from "../utils/validationUtils";
import { useUserStore } from "../context/UserStore";
// Importar el store
import useAuthStore from "../context/AuthStore";

function LogIn() {
	const navigate = useNavigate();
	const { authLogin } = useAuthStore();
	const user = {
		username: "",
		password: "",
	};

	const { getOneUserWithoutID } = useUserStore();

	return (
		<div className="container-form-user">
			<Formik
				initialValues={user}
				enableReinitialize={true}
				onSubmit={async (values, actions) => {
					const response = await getOneUserWithoutID(values);
					const isNewUser = response.data.userExists;
					if (!isNewUser) {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Usuario o contraseña incorrectos",
							background: "#F959FE",
							color: "#471958",
							confirmButtonColor: "#9654b3",
						});
						return;
					}
					Swal.fire({
						icon: "success",
						title: "Iniciaste sesion correctamente",
						showConfirmButton: false,
						background: "#F959FE",
						color: "#471958",
						confirmButtonColor: "#9654b3",
						timer: 1500,
					}).then(() => {
						// Para guardar los datos de el usuario en el store
						authLogin(
							response.data.username,
							response.data.token,
							response.data.role,
							response.data.img
						);
						navigate("/");
					});
				}}
				validate={(values) => {
					let errors = {};

					vldtUser("username", values.username, 3, 8, errors);
					vldtUser("password", values.password, 4, 15, errors);

					return errors;
				}}
			>
				{({
					handleChange,
					handleSubmit,
					handleBlur,
					values,
					errors,
					touched,
					isSubmitting,
				}) => (
					<Form onSubmit={handleSubmit}>
						<div className="card-form-user">
							<h1>Iniciar Sesion</h1>
							<input
								type="text"
								name="username"
								value={values.username}
								onChange={handleChange}
								onBlur={handleBlur}
								className="input-form-user"
								placeholder="Ingresar usuario.."
							/>
							{touched.username && errors.username && (
								<p className="error-validation">{errors.username}</p>
							)}
							<input
								type="password"
								name="password"
								id="pass3"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								className="input-form-user"
								placeholder="Ingresar Contraseña.."
							/>
							<ShowHidePass passwordInputId="pass3" eyeId="reg-3" />
							{touched.password && errors.password && (
								<p className="error-validation">{errors.password}</p>
							)}
							<button
								type="submit"
								className="button-purple send-button-user"
								disabled={isSubmitting}
							>
								Iniciar Sesion
							</button>
							<br />
							<Link to="/Register">O registrate...</Link>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default LogIn;
