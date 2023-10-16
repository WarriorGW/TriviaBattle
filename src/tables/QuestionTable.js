import React, { useEffect } from "react";
import { useQuestionStore } from "../context/QuestionStore";

function QuestionTable() {
	const { questions, getAllQuestions } = useQuestionStore();
	useEffect(() => {
		getAllQuestions();
	}, [getAllQuestions]);
	return (
		<div className="table-admin-1">
			<div className="table-admin-2">
				<div className="table-admin-3">
					<table className="table table-hover table-striped m-0">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col" className="w-100">
									Pregunta
								</th>
								<th scope="col">Correcta</th>
								<th scope="col">Incorrecta</th>
								<th scope="col">Incorrecta</th>
								<th scope="col">Incorrecta</th>
							</tr>
						</thead>
						<tbody>
							{questions.map((question, index) => (
								<tr key={index}>
									<th scope="row">
										{question.id_question}({index + 1})
									</th>
									<td>{question.question}</td>
									<td>{question.right_answer}</td>
									<td>{question.wrong_answer_1}</td>
									<td>{question.wrong_answer_2}</td>
									<td>{question.wrong_answer_3}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default QuestionTable;
