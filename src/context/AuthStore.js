import { create } from "zustand";

// Definir el store de Zustand
const useAuthStore = create((set) => ({
	authUsername: null,
	authToken: null,
	authRole: null,
	authLogin: (username, token, role) => {
		set({ authUsername: username, authToken: token, authRole: role });
		// Guardar el token en localStorage
		localStorage.setItem("authToken", token);
		localStorage.setItem("authUsername", username);
		localStorage.setItem("authRole", role);
	},
	authLogout: () => {
		set({ authUsername: null, authToken: null, authRole: null });
		// Eliminar el token de localStorage al cerrar sesión
		localStorage.removeItem("authToken");
		localStorage.removeItem("authUsername");
		localStorage.removeItem("authRole");
	},
}));

export default useAuthStore;
