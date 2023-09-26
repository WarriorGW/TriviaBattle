import React from "react";
import { Formik, Form } from "formik";
import "./css/FormsUsersStyle.css";

function ChangeUsername() {
	return (
		<div className="container-form-user">
			<Formik>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form>
						<div className="card-form-user">
							<h1>Cambiar nombre</h1>
							<input
								type="text"
								className="input-form-user"
								placeholder="Ingresar nuevo nombre.."
							/>
							<input
								type="text"
								className="input-form-user"
								placeholder="Confirmar nuevo nombre.."
							/>
							<input
								type="password"
								className="input-form-user"
								placeholder="Contraseña.."
							/>
							<button type="submit" className="button-purple input-form-user">
								Cambiar
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default ChangeUsername;
