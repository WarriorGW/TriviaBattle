import React from "react";
import { Formik, Form } from "formik";

function Register() {
	return (
		<div className="container">
			<Formik>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form>
						<h1>Registrarse</h1>
						<input type="text" placeholder="Nombre de usuario..." />
						<input type="password" placeholder="Contrasena..." />
						<button type="submit">Registrarse</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Register;
