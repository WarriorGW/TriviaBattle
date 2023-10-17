import axios from "axios";
import BASE_URL from "./base_url";

export const getAllScoresReq = async () => {
	return await axios.get(`${BASE_URL}/scores`);
};

export const getOneScoreReq = async (id_user) => {
	return await axios.post(`${BASE_URL}/score`, { id_user });
};

export const createScoreReq = async (id_user, score) => {
	return await axios.post(`${BASE_URL}/scores`, { id_user, score });
};

export const updateScoreReq = async (id_user, score) => {
	return await axios.put(`${BASE_URL}/scores`, { score, id_user });
};
