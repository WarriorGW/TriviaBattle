import React from "react";
import { Formik, Form } from "formik";

function AddQuestion() {
	return (
		<div className="container">
			<Formik>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form>
						<input type="text" placeholder="Pregunta..." />
						<div>
							<input type="text" placeholder="Respuesta correcta..." />
							<input type="text" placeholder="Respuesta incorrecta..." />
							<input type="text" placeholder="Respuesta incorrecta..." />
							<input type="text" placeholder="Respuesta incorrecta..." />
						</div>
						<button type="submit">Guardar pregunta</button>
					</Form>
				)}
			</Formik>
			<div>
				<p>Aqui estaran los puntajes uwu</p>
			</div>
		</div>
	);
}

export default AddQuestion;
