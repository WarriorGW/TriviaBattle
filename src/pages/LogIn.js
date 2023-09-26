import React from "react";
import { Formik, Form } from "formik";
import "./css/LogInStyle.css";

function LogIn() {
	return (
		<div className="container-login">
			<Formik>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form>
						<div className="card-login">
							<h1>Iniciar Sesion</h1>
							<input
								type="text"
								className="input-login"
								placeholder="Ingresar usuario.."
							/>
							<input
								type="password"
								className="input-login"
								placeholder="Ingresar Contraseña.."
							/>
							<button type="submit" className="button-purple input-login">
								Iniciar Sesion
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default LogIn;
