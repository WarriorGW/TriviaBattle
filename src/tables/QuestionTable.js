import React, { useEffect } from "react";
import { useQuestionStore } from "../context/QuestionStore";

function QuestionTable() {
	const { questions, getAllQuestions } = useQuestionStore();
	useEffect(() => {
		getAllQuestions();
	}, [getAllQuestions]);
	return (
		<table className="table-dark">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Pregunta</th>
					<th scope="col">Correcta</th>
					<th scope="col">InCorrecta1</th>
					<th scope="col">InCorrecta2</th>
					<th scope="col">InCorrecta3</th>
				</tr>
			</thead>
			<tbody>
				{questions.map((question, index) => (
					<tr key={index}>
						<th scope="row">{question.id_question}</th>
						<td>{question.question}</td>
						<td>{question.right_answer}</td>
						<td>{question.wrong_answer_1}</td>
						<td>{question.wrong_answer_2}</td>
						<td>{question.wrong_answer_3}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default QuestionTable;
