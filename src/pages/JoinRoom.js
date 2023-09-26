import React from "react";
import "./css/FormsUsersStyle.css";
import { Formik, Form } from "formik";

function JoinRoom() {
	return (
		<div className="container-form-user">
			<Formik
				initialValues={{ codigoSala: "" }}
				onSubmit={async (values, actions) => {
					console.log("Mamaguevo");
					console.log(values.codigoSala);
				}}
			>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<div className="card-form-user">
							<h1>UNIRSE A LA SALA</h1>
							<input
								type="text"
								name="codigoSala"
								className="input-form-user"
								onChange={handleChange}
								placeholder="Ingresa el codigo..."
							/>
							<button
								type="submit"
								className="button-purple input-form-user"
								disabled={isSubmitting}
							>
								Ingresar a la partida
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default JoinRoom;
