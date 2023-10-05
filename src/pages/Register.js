import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form } from "formik";
// Importar componente para mostrar/ocultar contraseña
import ShowHidePass from "../components/ShowHidePass";
// Importar validaciones de usuario
import { vldtUser } from "../utils/validationUtils";
// Importar store de usuario
import { useUserStore } from "../context/UserStore";
// Importar SweetAlert2
import Swal from "sweetalert2";
// Importar estilos
import "./css/FormsUsersStyle.css";

function Register() {
	const navigate = useNavigate();
	const user = {
		username: "",
		password: "",
		confirmPassword: "",
	};

	const { createUser, getOneUserByName } = useUserStore();

	return (
		<div className="container-form-user">
			<Formik
				initialValues={user}
				enableReinitialize={true}
				onSubmit={async (values) => {
					// Validar si el usuario ya existe
					const response = await getOneUserByName(values.username);
					const isNewUser = response.data.userExists;
					if (isNewUser) {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Ya existe ese nombre de usuario, intenta otro",
						});
						return;
					}
					await createUser(values);
					Swal.fire({
						icon: "success",
						text: "Usuario registrado exitosamente",
						showConfirmButton: false,
						timer: 1500,
					}).then(() => {
						navigate("/login");
					});
					console.log(values);
				}}
				validate={(values) => {
					let errors = {};

					vldtUser("username", values.username, 3, 8, errors);
					vldtUser("password", values.password, 4, 15, errors);
					vldtUser("confirmPassword", values.confirmPassword, 4, 15, errors);

					// Validar contraseñas iguales
					if (values.password !== values.confirmPassword) {
						errors.confirmPassword = "Las contraseñas no coinciden";
					}
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
							<h1>Registrarse</h1>
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
								id="pass1"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								className="input-form-user"
								placeholder="Ingresar Contraseña.."
							/>
							<ShowHidePass passwordInputId="pass1" eyeId="reg-1" />
							{touched.password && errors.password && (
								<p className="error-validation">{errors.password}</p>
							)}
							<input
								type="password"
								name="confirmPassword"
								id="pass2"
								value={values.confirmPassword}
								onChange={handleChange}
								onBlur={handleBlur}
								className="input-form-user"
								placeholder="Confirmar Contraseña.."
							/>
							<ShowHidePass passwordInputId="pass2" eyeId="reg-2" />
							{touched.confirmPassword && errors.confirmPassword && (
								<p className="error-validation">{errors.confirmPassword}</p>
							)}
							<button
								type="submit"
								disabled={isSubmitting}
								className="button-purple send-button-user"
							>
								Registrarse
							</button>
							<br />
							<Link to="/LogIn">O inicia sesion...</Link>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Register;
