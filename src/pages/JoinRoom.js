import React from "react";
import "./css/JoinRoomStyle.css";
import { Formik, Form } from "formik";

function JoinRoom() {
	return (
		<div className="container">
			<Formik
				initialValues={{ codigoSala: "" }}
				onSubmit={async (values, actions) => {
					console.log("Mamaguevo");
					console.log(values.codigoSala);
				}}
			>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<h1>UNIRSE A LA SALA</h1>
						<input
							type="text"
							name="codigoSala"
							onChange={handleChange}
							placeholder="Ingresa el codigo..."
						/>
						<button type="submit" disabled={isSubmitting}>
							Ingresar a la partida
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default JoinRoom;
