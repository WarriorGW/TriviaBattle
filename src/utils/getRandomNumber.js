// Función para obtener un número aleatorio dentro de un rango
const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomNumber;
