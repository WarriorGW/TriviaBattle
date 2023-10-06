import React, { useEffect } from "react";
import "./css/ProgressBarStyle.css";

function ProgressBar() {
	useEffect(() => {
		// Obtener la barra de progreso después de que el componente se monte
		const progressBar = document.getElementById("progress-bar");

		// Duración total del temporizador en segundos
		const duracionSegundos = 15;

		// Intervalo de actualización de la barra de progreso en milisegundos
		const intervalo = 1000; // 1 segundo

		// Calcular la cantidad de incremento de la barra por segundo
		const incrementoPorSegundo = 100 / duracionSegundos;

		let porcentaje = 0;

		// Función para actualizar la barra de progreso
		function actualizarBarra() {
			if (porcentaje >= 100) {
				clearInterval(interval);
				console.log("Temporizador completado.");
			} else {
				porcentaje += incrementoPorSegundo;
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
