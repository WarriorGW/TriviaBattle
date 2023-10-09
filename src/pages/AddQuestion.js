import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// Importar validaciones de pregunta
import { vldtQuestion } from "../utils/validationUtils";
// Importar estilos
import "./css/AddQuestionStyle.css";

function AddQuestion() {
	const navigate = useNavigate();

	const [questions, setQuestions] = useState({
		question: "",
		correctAns: "",
		incorrectAns1: "",
		incorrectAns2: "",
		incorrectAns3: "",
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
						text: `¿La respuesta correcta es: '${values.correctAns}'?`,
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

					vldtQuestion("question", values.question, 255, errors);
					vldtQuestion("correctAns", values.correctAns, 255, errors);
					vldtQuestion("incorrectAns1", values.incorrectAns1, 255, errors);
					vldtQuestion("incorrectAns2", values.incorrectAns2, 255, errors);
					vldtQuestion("incorrectAns3", values.incorrectAns3, 255, errors);

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
										name="correctAns"
										placeholder="Correcta"
										value={values.correctAns}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.correctAns && touched.correctAns && (
										<p className="error-validation">{errors.correctAns}</p>
									)}
								</div>
								<div>
									<input
										className="grid-item img-bg-2"
										type="text"
										name="incorrectAns1"
										placeholder="Incorrecta"
										value={values.incorrectAns1}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.incorrectAns1 && touched.incorrectAns1 && (
										<p className="error-validation">{errors.incorrectAns1}</p>
									)}
								</div>
								<div>
									<input
										className="grid-item img-bg-3"
										type="text"
										name="incorrectAns2"
										placeholder="Incorrecta"
										value={values.incorrectAns2}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.incorrectAns2 && touched.incorrectAns2 && (
										<p className="error-validation">{errors.incorrectAns2}</p>
									)}
								</div>
								<div>
									<input
										className="grid-item img-bg-4"
										type="text"
										name="incorrectAns3"
										placeholder="Incorrecta"
										value={values.incorrectAns3}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.incorrectAns3 && touched.incorrectAns3 && (
										<p className="error-validation">{errors.incorrectAns3}</p>
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
