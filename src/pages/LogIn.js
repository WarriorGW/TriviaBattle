import React from "react";
import { Formik, Form } from "formik";
import "./css/FormsUsersStyle.css";

function LogIn() {
	return (
		<div className="container-form-user">
			<Formik>
				{({
					handleChange,
					handleSubmit,
					handleBlur,
					values,
					errors,
					touched,
					isSubmitting,
				}) => (
					<Form>
						<div className="card-form-user">
							<h1>Iniciar Sesion</h1>
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
							<button type="submit" className="button-purple send-button-user">
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
