import React, { useEffect } from "react";

const BodyLayout = ({ backgroundColor, children }) => {
	// useEffect cambia el color de fondo del body cuando el componente se monta
	useEffect(() => {
		document.body.style.backgroundColor = backgroundColor || "#FFFFFF"; // Color de fondo por defecto
		return () => {
			document.body.style.backgroundColor = ""; // Restablece el color de fondo al desmontar el componente
		};
	}, [backgroundColor]);

	return <>{children}</>;
};

export default BodyLayout;
