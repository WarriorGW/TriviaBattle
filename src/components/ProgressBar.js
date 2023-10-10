import React, { useEffect } from "react";
import "./css/ProgressBarStyle.css";

function ProgressBar(props) {
	useEffect(() => {
		const progressBar = document.getElementById("progress-bar");
		const duracionSegundos = 10; // Duración total en segundos
		const intervalo = 16.666; // Intervalo de actualización en milisegundos
		const incFPS = 100 / duracionSegundos / 60; // Calcular el incremento por fotograma

		let porcentaje = 0;

		// Función para actualizar la barra de progreso
		function actualizarBarra() {
			if (porcentaje >= 100) {
				clearInterval(interval);
				props.onComplete();
				console.log("Temporizador completado.");
			} else {
				porcentaje += incFPS;
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
		<div className="d-flex mx-2 my-3">
			<span className="progress-container d-flex">
				<span className="progress-inside" id="progress-bar"></span>
			</span>
		</div>
	);
}

export default ProgressBar;
