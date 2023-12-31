import React from "react";
import "./css/Error404Style.css";

function Error404() {
	return (
		<div className="container-error">
			<h1 className="title-error">404</h1>
			<h2 className="subtitle-error">Page Not Found</h2>
			<img
				alt="Error404"
				className="img-error"
				src={require("../assets/wbg404.png")}
			/>
			<p className="text-error">The page you are looking for does not exist.</p>
		</div>
	);
}

export default Error404;
