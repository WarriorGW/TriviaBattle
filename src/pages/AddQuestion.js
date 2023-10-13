import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// Importar validaciones de pregunta
import { vldtQuestion } from "../utils/validationUtils";
// Importar estilos
import "./css/AddQuestionStyle.css";
// Store de Zustand
import { useQuestionStore } from "../context/QuestionStore";

function AddQuestion() {
	const navigate = useNavigate();

	const createQuestion = useQuestionStore((state) => state.createQuestion);

	const [questions, setQuestions] = useState({
		question: "",
		right_answer: "",
		wrong_answer_1: "",
		wrong_answer_2: "",
		wrong_answer_3: "",
	});
	return (
		<div className="container my-5">
			<Formik
				initialValues={questions}
				enableReinitialize={true}
				onSubmit={async (values, actions) => {
					setQuestions(values);
					const result = await Swal.fire({
						icon: "question",
						title: "¿Seguro?",
						text: `¿La respuesta correcta es: '${values.right_answer}'?`,
						showCancelButton: true,
						cancelButtonColor: "#d33",
						confirmButtonText: "Si, es correcto",
						confirmButtonColor: "#3085d6",
					});

					if (result.isConfirmed) {
						navigate("/");
						const response = await createQuestion(values);
						console.log(response);
					} else {
						Swal.fire("Cancelado", "Corrige la pregunta", "error");
					}
				}}
				validate={(values) => {
					let errors = {};

					vldtQuestion("question", values.question, 255, errors);
					vldtQuestion("right_answer", values.right_answer, 255, errors);
					vldtQuestion("wrong_answer_1", values.wrong_answer_1, 255, errors);
					vldtQuestion("wrong_answer_2", values.wrong_answer_2, 255, errors);
					vldtQuestion("wrong_answer_3", values.wrong_answer_3, 255, errors);

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
										name="right_answer"
										placeholder="Correcta"
										value={values.right_answer}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.right_answer && touched.right_answer && (
										<p className="error-validation">{errors.right_answer}</p>
									)}
								</div>
								<div>
									<input
										className="grid-item img-bg-2"
										type="text"
										name="wrong_answer_1"
										placeholder="Incorrecta"
										value={values.wrong_answer_1}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.wrong_answer_1 && touched.wrong_answer_1 && (
										<p className="error-validation">{errors.wrong_answer_1}</p>
									)}
								</div>
								<div>
									<input
										className="grid-item img-bg-3"
										type="text"
										name="wrong_answer_2"
										placeholder="Incorrecta"
										value={values.wrong_answer_2}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.wrong_answer_2 && touched.wrong_answer_2 && (
										<p className="error-validation">{errors.wrong_answer_2}</p>
									)}
								</div>
								<div>
									<input
										className="grid-item img-bg-4"
										type="text"
										name="wrong_answer_3"
										placeholder="Incorrecta"
										value={values.wrong_answer_3}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.wrong_answer_3 && touched.wrong_answer_3 && (
										<p className="error-validation">{errors.wrong_answer_3}</p>
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
