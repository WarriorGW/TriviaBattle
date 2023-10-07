import axios from "axios";
import BASE_URL from "./base_url";

export const getAllUsersReq = async () => {
	return await axios.get(`${BASE_URL}/users`);
};

export const getOneUserReq = async (id) => {
	return await axios.get(`${BASE_URL}/users/${id}`);
};

export const getOneUserByNameReq = async (username) => {
	return await axios.post(`${BASE_URL}/user`, { username });
};

export const getOneUserWithoutIDReq = async (userData) => {
	return await axios.post(`${BASE_URL}/userwid`, userData);
};

export const createUserReq = async (user) => {
	return await axios.post(`${BASE_URL}/users`, user);
};

export const updateUserReq = async (id, newValue) => {
	return await axios.put(`${BASE_URL}/users/${id}`, newValue);
};

export const updateUserImgReq = async (id, newImg) => {
	return await axios.put(`${BASE_URL}/userimg/${id}`, { img: newImg });
};

export const deleteUserReq = async (id) => {
	return await axios.delete(`${BASE_URL}/users/${id}`);
};
