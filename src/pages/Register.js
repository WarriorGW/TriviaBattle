import React, { useState } from "react";
import { Formik, Form } from "formik";
import ShowHidePass from "../components/ShowHidePass";
// Importar validaciones de usuario
import { vldtUser } from "../utils/validationUtils";
// Importar estilos
import "./css/FormsUsersStyle.css";

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
					setUser(values);
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
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Register;
