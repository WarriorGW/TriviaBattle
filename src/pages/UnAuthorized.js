import React from "react";
import "./css/Error404Style.css";

import sadFace from "../assets/sad-dizzy.svg";

function UnAuthorized() {
	return (
		<div className="container-error">
			{/* <i className="uil uil-sad-dizzy" style={{ fontSize: "200px" }} /> */}
			<img width={200} height={200} src={sadFace} alt="Acceso no autorizado" />
			<h1 className="title-error">401</h1>
			<hr />
			<h2 className="subtitle-error">Usuario sin autorizacion</h2>
		</div>
	);
}

export default UnAuthorized;
