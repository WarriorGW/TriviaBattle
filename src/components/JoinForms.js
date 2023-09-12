import React from "react";
import { Formik, Form } from "formik";

function JoinForms() {
	return (
		<div className="">
			<Formik
				initialValues={{ coigo: "" }}
				onSubmit={async () => {
					console.log("Mamaguevo");
				}}
			>
				{({ handleChange, handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<div className="">
							<input
								type="text"
								className=""
								placeholder="Ingresa el codigo..."
								onChange={handleChange}
								name="codigo"
							></input>
							<button type="submit" className="" disabled={isSubmitting}>
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
