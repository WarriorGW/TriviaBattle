import React from "react";
import { Formik, Form } from "formik";
import "./css/RegisterStyle.css";

function Register() {
	return (
		<div className="container-register">
			<Formik>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form>
						<div className="card-register">
							<h1>Registrarse</h1>
							<input
								type="text"
								className="input-register"
								placeholder="Ingresar usuario.."
							/>
							<input
								type="password"
								className="input-register"
								placeholder="Ingresar Contraseña.."
							/>
							<input
								type="password"
								className="input-register"
								placeholder="Confirmar Contraseña.."
							/>
							<button type="submit" className="button-purple input-register">
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
