import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./css/AddQuestionStyle.css";

function AddQuestion() {
	const navigate = useNavigate();

	const [questions, setQuestions] = useState({
		question: "",
		correctAnswer: "",
		incorrectAnswer1: "",
		incorrectAnswer2: "",
		incorrectAnswer3: "",
	});
	return (
		<div className="container-add">
			<Formik
				initialValues={questions}
				enableReinitialize={true}
				onSubmit={async (values, actions) => {
					setQuestions(values);
					console.log(values);
					Swal.fire({
						icon: "question",
						title: "¿Seguro?",
						text: `¿La respuesta correcta es: '${values.correctAnswer}'?`,
						showCancelButton: true,
						cancelButtonColor: "#d33",
						confirmButtonText: "Si, es correcto",
						confirmButtonColor: "#3085d6",
					}).then((result) => {
						result.isConfirmed ? navigate("/") : null;
					});
				}}
			>
				{({ handleChange, handleSubmit, handleBlur, values, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<div className="card-add">
							<div className="container-add-input">
								<input
									className="text-add"
									type="text"
									name="question"
									placeholder="Ingresar la pregunta sin signos de interrogación"
									value={values.question}
									onChange={handleChange}
								/>
							</div>
							<div className="container-grid">
								<input
									className="grid-item img-bg-1"
									type="text"
									name="correctAnswer"
									placeholder="Correcta"
									value={values.correctAnswer}
									onChange={handleChange}
								/>
								<input
									className="grid-item img-bg-2"
									type="text"
									name="incorrectAnswer1"
									placeholder="Incorrecta"
									value={values.incorrectAnswer1}
									onChange={handleChange}
								/>
								<input
									className="grid-item img-bg-3"
									type="text"
									name="incorrectAnswer2"
									placeholder="Incorrecta"
									value={values.incorrectAnswer2}
									onChange={handleChange}
								/>
								<input
									className="grid-item img-bg-4"
									type="text"
									name="incorrectAnswer3"
									placeholder="Incorrecta"
									value={values.incorrectAnswer3}
									onChange={handleChange}
								/>
							</div>
							<div className="centered-button">
								<button
									className="button-add border-and-shadow"
									type="submit"
									disabled={isSubmitting}
								>
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
