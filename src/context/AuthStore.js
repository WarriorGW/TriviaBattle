import { create } from "zustand";

// Definir el store de Zustand
const useAuthStore = create((set) => ({
	auth: null,
	login: (user) => set({ auth: user }),
	logout: () => set({ auth: null }),
}));

export default useAuthStore;
