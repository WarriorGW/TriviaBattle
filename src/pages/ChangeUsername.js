import React, { useState } from "react";
import { Formik, Form } from "formik";
import "./css/FormsUsersStyle.css";
import ShowHidePass from "../components/ShowHidePass";

function ChangeUsername() {
	const [username, setUsername] = useState({
		newUsername: "",
		confirmNewUsername: "",
		password: "",
	});
	return (
		<div className="container-form-user">
			<Formik
				initialValues={username}
				enableReinitialize={true}
				onSubmit={async (values) => {
					console.log(values);
					setUsername(values);
				}}
				validate={(values) => {
					let errors = {};
					// Validar nombre de usuario
					if (!values.newUsername && !values.confirmNewUsername) {
						errors.newUsername = "Campo requerido";
						errors.confirmNewUsername = "Campo requerido";
					} else if (values.newUsername.length < 3) {
						errors.newUsername =
							"El nombre de usuario debe tener al menos 3 caracteres";
					} else if (values.newUsername.length > 8) {
						errors.newUsername =
							"El nombre de usuario debe tener menos de 8 caracteres";
					} else if (/\s/.test(values.newUsername)) {
						errors.newUsername =
							"El nombre de usuario no puede contener espacios";
					} else if (values.newUsername !== values.confirmNewUsername) {
						errors.confirmNewUsername = "Los nombres no coinciden";
					}
					// Validar contraseña
					if (!values.password) {
						errors.password = "Campo requerido";
					} else if (values.password.length < 4) {
						errors.password = "La contraseña debe tener al menos 4 caracteres";
					} else if (values.password.length > 15) {
						errors.password = "La contraseña debe tener menos de 15 caracteres";
					} else if (/\s/.test(values.password)) {
						errors.password = "La contraseña no puede contener espacios";
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
							<h1>Cambiar nombre</h1>
							<input
								type="text"
								name="newUsername"
								value={values.newUsername}
								onChange={handleChange}
								onBlur={handleBlur}
								className="input-form-user"
								placeholder="Ingresar nuevo nombre.."
							/>
							{errors.newUsername && touched.newUsername && (
								<p className="error-validation">{errors.newUsername}</p>
							)}
							<input
								type="text"
								name="confirmNewUsername"
								value={values.confirmNewUsername}
								onChange={handleChange}
								onBlur={handleBlur}
								className="input-form-user"
								placeholder="Confirmar nuevo nombre.."
							/>
							{errors.confirmNewUsername && touched.confirmNewUsername && (
								<p className="error-validation">{errors.confirmNewUsername}</p>
							)}
							<input
								type="password"
								name="password"
								id="pass4"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								className="input-form-user"
								placeholder="Contraseña.."
							/>
							<ShowHidePass passwordInputId="pass4" eyeId="reg-4" />
							{errors.password && touched.password && (
								<p className="error-validation">{errors.password}</p>
							)}
							<button
								type="submit"
								className="button-purple send-button-user"
								disabled={isSubmitting}
							>
								Cambiar
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default ChangeUsername;
