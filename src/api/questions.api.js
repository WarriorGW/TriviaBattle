import axios from "axios";
import BASE_URL from "./base_url";

export const getAllQuestionsReq = async () => {
	return await axios.get(`${BASE_URL}/questions`);
};

export const getOneQuestionReq = async (id) => {
	return await axios.get(`${BASE_URL}/questions/${id}`);
};

export const createQuestionReq = async (user) => {
	return await axios.post(`${BASE_URL}/questions`, user);
};

export const updateQuestionReq = async (id, newValue) => {
	return await axios.put(`${BASE_URL}/questions/${id}`, newValue);
};

export const deleteQuestionReq = async (id) => {
	return await axios.delete(`${BASE_URL}/questions/${id}`);
};
