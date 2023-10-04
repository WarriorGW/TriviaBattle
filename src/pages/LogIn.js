import React, { useState } from "react";
import { Formik, Form } from "formik";
import "./css/FormsUsersStyle.css";
import ShowHidePass from "../components/ShowHidePass";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// Importar validaciones de usuario
import { vldtUser } from "../utils/validationUtils";

function LogIn() {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	return (
		<div className="container-form-user">
			<Formik
				initialValues={user}
				enableReinitialize={true}
				onSubmit={async (values, actions) => {
					console.log(values);
					setUser(values);
					Swal.fire({
						icon: "success",
						title: "Iniciaste sesion correctamente",
						showConfirmButton: false,
						background: "#F959FE",
						color: "#471958",
						timer: 1500,
					}).then(() => {
						navigate("/");
					});
				}}
				validate={(values) => {
					let errors = {};

					vldtUser("username", values.username, 3, 8, errors);
					vldtUser("password", values.password, 4, 15, errors);

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
							<h1>Iniciar Sesion</h1>
							<input
								type="text"
								name="username"
								value={values.username}
								onChange={handleChange}
								onBlur={handleBlur}
								className="input-form-user"
								placeholder="Ingresar usuario.."
							/>
							{touched.username && errors.username && (
								<p className="error-validation">{errors.username}</p>
							)}
							<input
								type="password"
								name="password"
								id="pass3"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								className="input-form-user"
								placeholder="Ingresar Contraseña.."
							/>
							<ShowHidePass passwordInputId="pass3" eyeId="reg-3" />
							{touched.password && errors.password && (
								<p className="error-validation">{errors.password}</p>
							)}
							<button
								type="submit"
								className="button-purple send-button-user"
								disabled={isSubmitting}
							>
								Iniciar Sesion
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default LogIn;
