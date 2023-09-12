import React from "react";
import "./css/UnirseSalaStyle.css";
import { Formik, Form } from "formik";

function UnirseSala() {
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
						<button
							type="submit"
							placeholder="Ingresar a la partida"
							disabled={isSubmitting}
						>
							Unirse
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default UnirseSala;
