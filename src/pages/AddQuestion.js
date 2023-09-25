import React from "react";
import { Formik, Form } from "formik";

import "./css/AddQuestionStyle.css";

function AddQuestion() {
	return (
		<div className="Add-container">
			<Formik>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form>
						<div className="card-Add">
							<div className="input-container">
								<input
									className="Add-Text"
									type="text"
									placeholder="Ingresar la preguntas deseada "
								/>
							</div>
							<div className="grid-container">
								<input
									type="text"
									className="grid-item"
									placeholder="Correcta"
									style={{
										backgroundImage:
											'url("https://img.icons8.com/plasticine/100/book.png")', // Ruta de la imagen
										backgroundSize: "38px 38px",
										backgroundRepeat: "no-repeat",
										paddingLeft: "10px",
										backgroundPosition: "left 10px bottom 10px",
									}}
								/>
								<input
									type="text"
									className="grid-item"
									placeholder="Incorrecta"
									style={{
										backgroundImage:
											'url("https://img.icons8.com/color/48/square-root.png")', // Ruta de la imagen
										backgroundSize: "38px 38px",
										backgroundRepeat: "no-repeat",
										paddingLeft: "10px",
										backgroundPosition: "left 10px bottom 10px",
									}}
								/>
								<input
									type="text"
									className="grid-item"
									placeholder="Incorrecta"
									style={{
										backgroundImage:
											'url("https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/7950F2/external-poker-chip-casino-kiranshastry-solid-kiranshastry-5.png")',
										backgroundSize: "38px 38px",
										backgroundRepeat: "no-repeat",
										paddingLeft: "10px",
										backgroundPosition: "left 10px bottom 10px",
									}}
								/>
								<input
									type="text"
									className="grid-item"
									placeholder="Incorrecta"
									style={{
										backgroundImage:
											'url("https://img.icons8.com/arcade/64/movie-projector.png")',
										backgroundSize: "38px 38px",
										backgroundRepeat: "no-repeat",
										paddingLeft: "10px",
										backgroundPosition: "left 10px bottom 10px",
									}}
								/>
							</div>
							<div className="centered-button">
								<button className="button-Add" type="submit">
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
