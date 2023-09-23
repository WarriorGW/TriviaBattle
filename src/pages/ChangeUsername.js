import React from "react";
import { Formik, Form } from "formik";

function ChangeUsername() {
	return (
		<div className="container">
			<Formik>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form>
						<h1>Cambiar nombre</h1>
						<input type="text" placeholder="Nuevo nombre de usuario..." />
						<input
							type="password"
							placeholder="Confirmar nuevo nombre de usuario..."
						/>
						<button type="submit">Cambiar</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default ChangeUsername;
