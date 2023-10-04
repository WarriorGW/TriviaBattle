import { create } from "zustand";

import {
	getAllUsersReq,
	getOneUserReq,
	createUserReq,
	updateUserReq,
	deleteUserReq,
} from "../api/users.api.js";

export const useUserStore = create((set) => ({
	users: [],
	getAllUsers: async () => {
		try {
			const response = await getAllUsersReq();
			set({ users: response.data });
		} catch (error) {
			console.error("Error al obtener usuarios:", error);
		}
	},
	getOneUser: async (id) => {
		try {
			const response = await getOneUserReq(id);
			set({ user: response.data });
		} catch (error) {
			console.error("Error al obtener usuario:", error);
		}
	},
	createUser: async (user) => {
		try {
			const response = await createUserReq(user);
			set({ user: response.data });
		} catch (error) {
			console.error("Error al crear usuario:", error);
		}
	},
	updateUser: async (id, newValue) => {
		try {
			const response = await updateUserReq(id, newValue);
			set({ user: response.data });
		} catch (error) {
			console.error("Error al actualizar usuario:", error);
		}
	},
	deleteUser: async (id) => {
		try {
			const response = await deleteUserReq(id);
			set({ user: response.data });
		} catch (error) {
			console.error("Error al eliminar usuario:", error);
		}
	},
}));