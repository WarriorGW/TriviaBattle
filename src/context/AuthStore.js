import { create } from "zustand";

// Definir el store de Zustand
const useAuthStore = create((set) => ({
	authUsername: null,
	authToken: null,
	authRole: null,
	authLogin: (username, token, role) =>
		set({ authUsername: username, authToken: token, authRole: role }),
	authLogout: () =>
		set({ authUsername: null, authToken: null, authRole: null }),
}));

export default useAuthStore;
