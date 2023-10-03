import axios from "axios";
import BASE_URL from "./base_url";

export const getAllUsersReq = async () => {
	return await axios.get(`${BASE_URL}/users`);
};

export const getOneUserReq = async (id) => {
	return await axios.get(`${BASE_URL}/users/${id}`);
};

export const createUserReq = async (user) => {
	return await axios.post(`${BASE_URL}/users`, user);
};

export const updateUserReq = async (id, newValue) => {
	return await axios.put(`${BASE_URL}/users/${id}`, newValue);
};

export const deleteUserReq = async (id) => {
	return await axios.delete(`${BASE_URL}/users/${id}`);
};
