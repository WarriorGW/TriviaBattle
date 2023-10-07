import { create } from "zustand";

// Definir el store de Zustand
const useAuthStore = create((set) => ({
	authUsername: null,
	authToken: null,
	authRole: null,
	authImg: null,
	authLogin: (username, token, role, img) => {
		set({
			authUsername: username,
			authToken: token,
			authRole: role,
			authImg: img,
		});
		// Guardar el token en localStorage
		localStorage.setItem("authToken", token);
		localStorage.setItem("authUsername", username);
		localStorage.setItem("authRole", role);
		localStorage.setItem("authImg", img);
	},
	authLogout: () => {
		set({
			authUsername: null,
			authToken: null,
			authRole: null,
			authImg: null,
		});
		// Eliminar el token de localStorage al cerrar sesión
		localStorage.removeItem("authToken");
		localStorage.removeItem("authUsername");
		localStorage.removeItem("authRole");
		localStorage.removeItem("authImg");
	},
}));

export default useAuthStore;
