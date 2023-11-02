// Funciones de React
import React, { useEffect, useState } from "react";
// Componentes
import ProgressBar from "../components/ProgressBar";
import WaitRoom from "../components/WaitRoom";
import Answer from "../components/Answer";
import UsersScore from "../components/UsersScore";
import FinishRoom from "../components/FinishRoom";
// Contextos
import { useQuestionStore } from "../context/QuestionStore";
import useAuthStore from "../context/AuthStore";
// Utilidades
import shuffleArray from "../utils/shuffleArray";
import getRandomNumber from "../utils/getRandomNumber";
import FooterScores from "../lists/FooterScores";
// Importar cofiguraciones
import {
	questionsQuantity,
	questionsTime,
	totalScore,
} from "../config/questions.config";
// Estilos
import "./css/InGameStyle.css";
import { useScoreStore } from "../context/ScoresStore";

function InGame() {
	const QuestionQuantity = questionsQuantity; // Cantidad de preguntas
	const finalTotalScore = totalScore; // Puntaje total posible en la partida

	const getAllQuestions = useQuestionStore((state) => state.getAllQuestions); // Función para obtener todas las preguntas
	const getOneQuestion = useQuestionStore((state) => state.getOneQuestion); // Función para obtener una pregunta por ID
	const updateScore = useScoreStore((state) => state.updateScore); // Función para actualizar el puntaje de un usuario
	const createScore = useScoreStore((state) => state.createScore); // Función para crear el puntaje de un usuario
	const getOneScore = useScoreStore((state) => state.getOneScore); // Función para obtener el puntaje de un usuario
	const [isLoading, setIsLoading] = useState(true); // Estado para indicar si se está cargando la página
	const [selectedQuestions, setSelectedQuestions] = useState([]); // Estado para almacenar las preguntas seleccionadas
	const [currentQuestion, setCurrentQuestion] = useState(0); // Índice de la pregunta actual
	const [shuffledAnswers, setShuffledAnswers] = useState([]); // Estado para almacenar las respuestas mezcladas
	const [progress, setProgress] = useState(0); // Estado para almacenar el progreso de la barra de progreso
	const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
	const [currentSelectedAnswer, setCurrentSelectedAnswer] = useState(null); // Estado para almacenar la respuesta seleccionada
	const [rightAnswer, setRightAnswer] = useState(
		new Array(QuestionQuantity).fill(null)
	); // Estado para almacenar las respuesta correcta
	const [puntaje, setPuntaje] = useState(0); // Estado para almacenar el puntaje
	const [selectedAnswers, setSelectedAnswers] = useState(
		new Array(QuestionQuantity).fill(null)
	);

	// Variable para decir cuanto porcentaje lleva cargado
	const [progressLoad, setProgressLoad] = useState(0);

	// Funcion para aumentar el valor del porcentaje de carga
	const increaseProgress = () => {
		setProgressLoad((prevProgress) => {
			const newProgress = prevProgress + 100 / QuestionQuantity;
			return Math.floor(newProgress); // Redondea al número entero más cercano
		});
	};

	const authId = useAuthStore((state) => state.authId);
	const authUsername = useAuthStore((state) => state.authUsername);
	const authImg = useAuthStore((state) => state.authImg);

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
			// Función para seleccionar IDs únicos de forma aleatoria
			const selectedIds = [];
			while (selectedIds.length < QuestionQuantity) {
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
				increaseProgress();
			}
			setSelectedQuestions(selectedQuestions);

			const correctAnswers = selectedQuestions.map(
				(question) => question.right_answer
			);
			setRightAnswer(correctAnswers);

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
		if (!isLoading) {
			const duracionSegundos = questionsTime; // Duración total en segundos
			const intervalo = 16.666; // Intervalo de actualización en milisegundos
			const incFPS = 100 / duracionSegundos / 60; // Calcular el incremento por fotograma

			function actualizarBarra() {
				setProgress((prevProgress) => {
					const newProgress = prevProgress + incFPS;
					if (newProgress >= 100) {
						clearInterval(interval);
						onComplete();
						// console.log("Temporizador completado.");
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
		}
	}, [isLoading, currentQuestion]);

	// Funcion para debuggear
	useEffect(() => {
		if (!isLoading) {
			// console.log(selectedQuestions[currentQuestion]);
		}
	}, [selectedQuestions, currentQuestion, isLoading]);

	// Función para manejar la selección de una respuesta
	const handleAnswerSelect = (answer) => {
		const updatedSelectedAnswers = [...selectedAnswers];
		updatedSelectedAnswers[currentQuestion] = answer;
		setSelectedAnswers(updatedSelectedAnswers);

		setCurrentSelectedAnswer(answer);

		// Obtén la pregunta actual
		const currentQuestionData = selectedQuestions[currentQuestion];

		// Compara la respuesta seleccionada con la respuesta correcta
		if (answer === currentQuestionData.right_answer) {
			// console.log("Respuesta correcta");
		} else {
			// console.log("Respuesta incorrecta");
		}
	};

	const handleValidateAnswers = () => {
		let newPuntaje = 0;
		for (let i = 0; i < QuestionQuantity; i++) {
			if (selectedAnswers[i] === rightAnswer[i]) {
				newPuntaje += 100;
			}
		}
		const resSearchScore = getOneScore(authId);
		const validateScoreExists = async () => {
			const res = await resSearchScore;
			if (res.data.length > 0) {
				const resUpdateScore = updateScore(authId, newPuntaje);
				console.log(await resUpdateScore);
			} else {
				const resCreateScore = createScore(authId, newPuntaje);
				console.log(await resCreateScore);
			}
		};

		validateScoreExists();
		setPuntaje(newPuntaje);
	};

	useEffect(() => {
		if (allQuestionsAnswered) {
			handleValidateAnswers();
		}
	}, [allQuestionsAnswered]);

	return (
		<>
			{isLoading === true ? (
				<WaitRoom progress={progressLoad} />
			) : (
				<>
					{allQuestionsAnswered ? ( // Comprueba si todas las preguntas se han respondido
						<>
							<FinishRoom
								score={puntaje}
								totalScore={finalTotalScore}
								username={authUsername}
								img={authImg}
							/>
						</>
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
													<Answer
														key={index}
														text={answer}
														onClick={() => handleAnswerSelect(answer)}
														isSelected={answer === currentSelectedAnswer}
													/>
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
