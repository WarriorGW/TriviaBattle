import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// eslint-disable-next-line
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Importar variables de colores
import "./constants.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
