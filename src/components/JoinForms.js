import React from "react";
import { Formik, Form } from "formik";

function JoinForms() {
	return (
		<div className="box-container border-shadow centered">
			<Formik
				initialValues={{ coigo: "" }}
				onSubmit={async () => {
					console.log("Mamaguevo");
				}}
			>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<div className="display-flex direction-column form">
							<input
								type="text"
								className="text-form border-shadow"
								placeholder="Ingresa el codigo..."
								onChange={handleChange}
								name="codigo"
							></input>
							<button
								type="submit"
								className="border-shadow button-code"
								disabled={isSubmitting}
							>
								Unirse
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default JoinForms;
