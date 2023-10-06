import { create } from "zustand";

// Definir el store de Zustand
const useAuthStore = create((set) => ({
	auth: null,
	authLogin: (user) => set({ auth: user }),
	authLogout: () => set({ auth: null }),
}));

export default useAuthStore;
