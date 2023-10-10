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
	const [progress, setProgress] = useState(0); // Estado para almacenar el progreso de la barra de progreso
	const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

	const onComplete = () => {
		setProgress(0);
		if (currentQuestion + 1 === selectedQuestions.length) {
			setAllQuestionsAnswered(true); // Todas las preguntas se han respondido
		} else {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

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

			setIsLoading(false);
		};
		fetchAllQuestions();
	}, [getOneQuestion]);

	useEffect(() => {
		if (!isLoading) {
			// Constante para almacenar las respuestas originales
			const originalAnswers = [
				selectedQuestions[currentQuestion].right_answer,
				selectedQuestions[currentQuestion].wrong_answer_1,
				selectedQuestions[currentQuestion].wrong_answer_2,
				selectedQuestions[currentQuestion].wrong_answer_3,
			];

			setShuffledAnswers(shuffleArray([...originalAnswers]));
		}
	}, [currentQuestion, selectedQuestions, isLoading]);

	useEffect(() => {
		const duracionSegundos = 10; // Duración total en segundos
		const intervalo = 16.666; // Intervalo de actualización en milisegundos
		const incFPS = 100 / duracionSegundos / 60; // Calcular el incremento por fotograma
		function actualizarBarra() {
			setProgress((prevProgress) => {
				const newProgress = prevProgress + incFPS;
				if (newProgress >= 100) {
					clearInterval(interval);
					onComplete();
					console.log("Temporizador completado.");
					return 0; // Restablece el progreso a 0 cuando se completa
				} else {
					return newProgress;
				}
			});
		}

		const interval = setInterval(actualizarBarra, intervalo);
		return () => {
			clearInterval(interval);
		};
	}, [currentQuestion]);

	useEffect(() => {
		if (!isLoading) {
			console.log(selectedQuestions[currentQuestion]);
		}
	}, [selectedQuestions, currentQuestion]);

	return (
		<>
			{isLoading === true ? (
				<WaitRoom />
			) : (
				<>
					{allQuestionsAnswered ? ( // Comprueba si todas las preguntas se han respondido
						<div className="message">Se ha acabado.</div>
					) : (
						<>
							<ProgressBar progress={progress} />
							<div className="container">
								<div className="row justify-content-center align-content-center">
									<div className="box-ingame mt-md-5 col-10 d-flex border-and-shadow px-5 py-3 py-md-5 justify-content-center align-content-center">
										<div className="w-100">
											<div className="d-flex justify-content-center text-center mb-2">
												<h2 className="question-title">
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
			)}
		</>
	);
}

export default InGame;
