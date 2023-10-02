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
		<div className="container my-5">
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
						result.isConfirmed
							? navigate("/")
							: Swal.fire("Cancelado", "Corrige la pregunta", "error");
					});
				}}
				validate={(values) => {
					let errors = {};
					const validateField = (fieldName, value, maxLength) => {
						if (!value) {
							errors[fieldName] = "Ingresa una respuesta";
						} else if (/[^a-zA-Z0-9\sñÑ]/.test(value)) {
							errors[fieldName] = "No se permiten signos en la respuesta";
						} else if (value.length > maxLength) {
							errors[
								fieldName
							] = `La respuesta debe tener menos de ${maxLength} caracteres`;
						}
					};

					validateField("question", values.question, 500);
					validateField("correctAnswer", values.correctAnswer, 100);
					validateField("incorrectAnswer1", values.incorrectAnswer1, 100);
					validateField("incorrectAnswer2", values.incorrectAnswer2, 100);
					validateField("incorrectAnswer3", values.incorrectAnswer3, 100);
					return errors;
				}}
			>
				{({
					handleChange,
					handleSubmit,
					handleBlur,
					values,
					errors,
					touched,
					isSubmitting,
				}) => (
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
									onBlur={handleBlur}
								/>
								{errors.question && touched.question && (
									<p className="error-validation">{errors.question}</p>
								)}
							</div>
							<div className="container-grid">
								<div>
									<input
										className="grid-item img-bg-1"
										type="text"
										name="correctAnswer"
										placeholder="Correcta"
										value={values.correctAnswer}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.correctAnswer && touched.correctAnswer && (
										<p className="error-validation">{errors.correctAnswer}</p>
									)}
								</div>
								<div>
									<input
										className="grid-item img-bg-2"
										type="text"
										name="incorrectAnswer1"
										placeholder="Incorrecta"
										value={values.incorrectAnswer1}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.incorrectAnswer1 && touched.incorrectAnswer1 && (
										<p className="error-validation">
											{errors.incorrectAnswer1}
										</p>
									)}
								</div>
								<div>
									<input
										className="grid-item img-bg-3"
										type="text"
										name="incorrectAnswer2"
										placeholder="Incorrecta"
										value={values.incorrectAnswer2}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.incorrectAnswer2 && touched.incorrectAnswer2 && (
										<p className="error-validation">
											{errors.incorrectAnswer2}
										</p>
									)}
								</div>
								<div>
									<input
										className="grid-item img-bg-4"
										type="text"
										name="incorrectAnswer3"
										placeholder="Incorrecta"
										value={values.incorrectAnswer3}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.incorrectAnswer3 && touched.incorrectAnswer3 && (
										<p className="error-validation">
											{errors.incorrectAnswer3}
										</p>
									)}
								</div>
							</div>
							<div className="centered-button">
								<button
									className="button-add"
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
