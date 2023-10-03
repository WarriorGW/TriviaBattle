const opc = 1;
const BASE_URL = "";

switch (opc) {
	case 1:
		BASE_URL = "https://server-tb.vercel.app";
		break;
	case 2:
		BASE_URL = "http://localhost:4000";
		break;
	case 3:
		BASE_URL = "http://192.168.1.67:4000";
		break;
	default:
		console.log("Escoge una url base");
		break;
}

export default BASE_URL;
