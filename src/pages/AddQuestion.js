import React from "react";
import { Formik, Form } from "formik";

import "./css/AddQuestionStyle.css";

function AddQuestion() {
	return (
		<div className="container-add">
			<Formik>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form>
						<div className="card-add">
							<div className="container-add-input">
								<input
									className="text-add"
									type="text"
									placeholder="Ingresar la pregunta sin signos de interrogación"
								/>
							</div>
							<div className="container-grid">
								<input
									type="text"
									className="grid-item img-bg-1"
									placeholder="Correcta"
								/>
								<input
									type="text"
									className="grid-item img-bg-2"
									placeholder="Incorrecta"
								/>
								<input
									type="text"
									className="grid-item img-bg-3"
									placeholder="Incorrecta"
								/>
								<input
									type="text"
									className="grid-item img-bg-4"
									placeholder="Incorrecta"
								/>
							</div>
							<div className="centered-button">
								<button className="button-add border-and-shadow" type="submit">
									Guardar pregunta
								</button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default AddQuestion;
