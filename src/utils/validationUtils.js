export const vldtUser = (fieldName, value, minLength, maxLength, errors) => {
	if (!value) {
		errors[fieldName] = "Campo requerido";
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
		errors[fieldName] = "Ingresa una respuesta";
	} else if (/[^a-zA-Z0-9\sñÑ]/.test(value)) {
		errors[fieldName] = "No se permiten signos en la respuesta";
	} else if (value.length > maxLength) {
		errors[
			fieldName
		] = `La respuesta debe tener menos de ${maxLength} caracteres`;
	}
};
