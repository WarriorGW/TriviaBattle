import React from "react";
import { Formik, Form } from "formik";
import "./css/FormsUsersStyle.css";

function Register() {
	return (
		<div className="container-form-user">
			<Formik>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form>
						<div className="card-form-user">
							<h1>Registrarse</h1>
							<input
								type="text"
								className="input-form-user"
								placeholder="Ingresar usuario.."
							/>
							<input
								type="password"
								className="input-form-user"
								placeholder="Ingresar Contraseña.."
							/>
							<input
								type="password"
								className="input-form-user"
								placeholder="Confirmar Contraseña.."
							/>
							<button type="submit" className="button-purple input-form-user">
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
