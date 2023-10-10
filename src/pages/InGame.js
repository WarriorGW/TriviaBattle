// Funciones de React
import React, { useEffect, useState } from "react";
// Componentes
import ProgressBar from "../components/ProgressBar";
import WaitRoom from "../components/WaitRoom";
import Answer from "../components/Answer";
import UsersScore from "../components/UsersScore";
// Contextos
import { useQuestionStore } from "../context/QuestionStore";
// Utilidades
import shuffleArray from "../utils/shuffleArray";
import getRandomNumber from "../utils/getRandomNumber";
import FooterScores from "../lists/FooterScores";
// Estilos
import "./css/InGameStyle.css";

function InGame() {
	const [isLoading, setIsLoading] = useState(true); // Estado para indicar si se está cargando la página
	const [selectedQuestions, setSelectedQuestions] = useState([]); // Estado para almacenar las preguntas seleccionadas
	const [currentQuestion, setCurrentQuestion] = useState(0); // Índice de la pregunta actual
	const [shuffledAnswers, setShuffledAnswers] = useState([]); // Estado para almacenar las respuestas mezcladas
	const getAllQuestions = useQuestionStore((state) => state.getAllQuestions); // Función para obtener todas las preguntas
	const getOneQuestion = useQuestionStore((state) => state.getOneQuestion); // Función para obtener una pregunta por ID
	useEffect(() => {
		const fetchAllQuestions = async () => {
			setIsLoading(true);
			const response = await getAllQuestions();
			const idsArray = response.data.map((question) => question.id_question);
			// Función para seleccionar 10 IDs únicos de forma aleatoria
			const selectedIds = [];
			while (selectedIds.length < 10) {
				const randomIndex = getRandomNumber(0, idsArray.length - 1);
				const randomId = idsArray[randomIndex];
				if (!selectedIds.includes(randomId)) {
					selectedIds.push(randomId);
				}
			}
			// Array para almacenar los datos de las preguntas seleccionadas
			const selectedQuestions = [];
			// Solicitar los datos de las preguntas para los IDs seleccionados
			for (const id of selectedIds) {
				const questionData = await getOneQuestion(id);
				selectedQuestions.push(questionData.data[0]);
			}
			setSelectedQuestions(selectedQuestions);
			// Constante para almacenar las respuestas originales
			const originalAnswers = [
				selectedQuestions[currentQuestion].right_answer,
				selectedQuestions[currentQuestion].wrong_answer_1,
				selectedQuestions[currentQuestion].wrong_answer_2,
				selectedQuestions[currentQuestion].wrong_answer_3,
			];
			setShuffledAnswers(shuffleArray([...originalAnswers]));
			setIsLoading(false);
		};
		fetchAllQuestions();
	}, [getOneQuestion]);

	return (
		<>
			{isLoading === true ? (
				<WaitRoom />
			) : (
				<>
					<ProgressBar
						onComplete={() => {
							setCurrentQuestion(currentQuestion + 1);
						}}
					/>
					<div className="container">
						<div className="row justify-content-center align-content-center">
							<div className="box-ingame mt-md-5 col-10 d-flex border-and-shadow px-5 py-3 py-md-5 justify-content-center align-content-center">
								<div className="w-100">
									<div className="d-flex justify-content-center text-center mb-2">
										<h2 className="question-title">
											{console.log(selectedQuestions[currentQuestion])}
											<>¿</>
											{selectedQuestions[currentQuestion].question}
											<>?</>
										</h2>
									</div>
									<div className="row w-100 mx-auto">
										{shuffledAnswers.map((answer, index) => (
											<Answer key={index} text={answer} />
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-scores">
						<div className="row">
							{FooterScores.map((user, index) => (
								<UsersScore key={index} {...user} />
							))}
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default InGame;
