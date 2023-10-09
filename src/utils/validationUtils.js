const CHARSUser = /[^a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]/u;

export const vldtUser = (fieldName, value, minLength, maxLength, errors) => {
	if (!value) {
		errors[fieldName] = "Campo requerido";
	} else if (CHARSUser.test(value)) {
		errors[fieldName] = "No se permiten signos";
	} else if (value.length < minLength) {
		errors[fieldName] = `El campo debe tener al menos ${minLength} caracteres`;
	} else if (value.length > maxLength) {
		errors[fieldName] = `El campo debe tener menos de ${maxLength} caracteres`;
	} else if (/\s/.test(value)) {
		errors[fieldName] = "El campo no puede contener espacios";
	}
};

export const vldtQuestion = (fieldName, value, maxLength, errors) => {
	if (!value) {
		errors[fieldName] = "Completa el campo";
	} else if (value.includes("?") || value.includes("¿")) {
		errors[fieldName] = "No puede contener signos de pregunta";
	} else if (value.length > maxLength) {
		errors[fieldName] = `El campo debe tener menos de ${maxLength} caracteres`;
	}
};
