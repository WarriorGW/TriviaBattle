import React from "react";
import { Formik, Form } from "formik";
import "./css/FormsUsersStyle.css";
import ShowHidePass from "../components/ShowHidePass";

function ChangeUsername() {
	return (
		<div className="container-form-user">
			<Formik>
				{({
					handleChange,
					handleSubmit,
					handleBlur,
					values,
					errors,
					touched,
					isSubmitting,
				}) => (
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
								id="pass4"
								className="input-form-user"
								placeholder="Contraseña.."
							/>
							<ShowHidePass passwordInputId="pass4" eyeId="reg-4" />
							<button type="submit" className="button-purple send-button-user">
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
