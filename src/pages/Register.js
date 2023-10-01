import React, { useState } from "react";
import { Formik, Form } from "formik";
import "./css/FormsUsersStyle.css";
import ShowHidePass from "../components/ShowHidePass";

function Register() {
	const [user, setUser] = useState({
		username: "",
		password: "",
		confirmPassword: "",
	});
	return (
		<div className="container-form-user">
			<Formik
				initialValues={user}
				enableReinitialize={true}
				onSubmit={async (values) => {
					console.log(values);
				}}
				validate={(values) => {
					let errors = {};
					// Validar nombre de usuario
					if (!values.username) {
						errors.username = "Campo requerido";
					} else if (values.username.length < 3) {
						errors.username =
							"El nombre de usuario debe tener al menos 3 caracteres";
					} else if (values.username.length > 8) {
						errors.username =
							"El nombre de usuario debe tener menos de 8 caracteres";
					}
					// Validar contraseñas
					if (!values.password && !values.confirmPassword) {
						errors.password = "Campo requerido";
						errors.confirmPassword = "Campo requerido";
					} else if (values.password.length < 4) {
						errors.password = "La contraseña debe tener al menos 4 caracteres";
					} else if (values.password.length > 15) {
						errors.password = "La contraseña debe tener menos de 15 caracteres";
					} else if (values.password !== values.confirmPassword) {
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
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Register;
