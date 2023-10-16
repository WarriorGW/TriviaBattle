import axios from "axios";
import BASE_URL from "./base_url";

export const getAllScoresReq = async () => {
	return await axios.get(`${BASE_URL}/scores`);
};
