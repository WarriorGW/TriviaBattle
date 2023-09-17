import React from "react";
import { Formik, Form } from "formik";

function LogIn() {
	return (
		<div className="container">
			<Formik>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form>
						<h1>Iniciar Sesion</h1>
						<input type="text" placeholder="Nombre de usuario..." />
						<input type="password" placeholder="Contrasena..." />
						<button type="submit">Iniciar Sesion</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default LogIn;
