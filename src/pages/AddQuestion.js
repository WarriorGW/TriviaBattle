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
									className="grid-item"
									placeholder="Correcta"
									style={{
										backgroundImage:
											'url("https://img.icons8.com/plasticine/100/book.png")', // Ruta de la imagen
									}}
								/>
								<input
									type="text"
									className="grid-item"
									placeholder="Incorrecta"
									style={{
										backgroundImage:
											'url("https://img.icons8.com/color/48/square-root.png")', // Ruta de la imagen
									}}
								/>
								<input
									type="text"
									className="grid-item"
									placeholder="Incorrecta"
									style={{
										backgroundImage:
											'url("https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/7950F2/external-poker-chip-casino-kiranshastry-solid-kiranshastry-5.png")',
									}}
								/>
								<input
									type="text"
									className="grid-item"
									placeholder="Incorrecta"
									style={{
										backgroundImage:
											'url("https://img.icons8.com/arcade/64/movie-projector.png")',
									}}
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
