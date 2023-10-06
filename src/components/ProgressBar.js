import React, { useEffect, useRef } from "react";
import "./css/ProgressBarStyle.css";

function ProgressBar() {
	const progressBarRef = useRef(null);
	useEffect(() => {
		// Obtener la barra de progreso después de que el componente se monte
		const progressBar = document.getElementById("progress-bar");

		// Duración total del temporizador en segundos
		const duracionSegundos = 15;

		// Intervalo de actualización de la barra de progreso en milisegundos
		const intervalo = 10; // 10 milisegundos

		// Calcular la cantidad de incremento de la barra por fotograma
		const incrementoPorFotograma = 100 / duracionSegundos / 60; // Supongamos 60 FPS

		let porcentaje = 0;

		// Función para actualizar la barra de progreso
		function actualizarBarra() {
			if (porcentaje >= 100) {
				clearInterval(interval);
				console.log("Temporizador completado.");
				porcentaje = 0;
			} else {
				porcentaje += incrementoPorFotograma;
				progressBar.style.width = porcentaje + "%";
			}
		}

		// Iniciar el temporizador
		const interval = setInterval(actualizarBarra, intervalo);

		// Limpieza del intervalo cuando el componente se desmonta
		return () => {
			clearInterval(interval);
		};
	}, []); // El segundo argumento [] significa que esto solo se ejecutará una vez al montar el componente

	return (
		<span className="progress-container d-flex">
			<span className="progress-inside" id="progress-bar"></span>
		</span>
	);
}

export default ProgressBar;
