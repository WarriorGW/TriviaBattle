import React from "react";
import "./css/FormsUsersStyle.css";
import { Formik, Form } from "formik";

function JoinRoom() {
	return (
		<div className="container-form-user">
			<Formik
				initialValues={{ codigoSala: "" }}
				enableReinitialize={true}
				onSubmit={async (values, actions) => {
					console.log(values);
				}}
				validate={(values) => {
					let errors = {};
					if (!values.codigoSala) {
						errors.codigoSala = "Campo requerido";
					} else if (values.codigoSala.length !== 6) {
						errors.codigoSala = "El codigo debe tener 6 caracteres";
					}
					return errors;
				}}
			>
				{({
					handleChange,
					handleSubmit,
					handleBlur,
					values,
					errors,
					touched,
					isSubmitting,
				}) => (
					<Form onSubmit={handleSubmit}>
						<div className="card-form-user">
							<h1>UNIRSE A LA SALA</h1>
							<input
								type="text"
								name="codigoSala"
								className="input-form-user"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.codigoSala}
								placeholder="Ingresa el codigo..."
							/>
							{touched.codigoSala && errors.codigoSala && (
								<p className="error-validation">{errors.codigoSala}</p>
							)}
							<button
								type="submit"
								className="button-purple send-button-user"
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
