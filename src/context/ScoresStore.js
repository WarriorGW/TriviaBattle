import { create } from "zustand";

import {
	getAllScoresReq,
	getOneScoreReq,
	updateScoreReq,
	createScoreReq,
} from "../api/scores.api";

export const useScoreStore = create((set) => ({
	scores: [],
	getAllScores: async () => {
		try {
			const response = await getAllScoresReq();
			set({ scores: response.data });
			return response;
		} catch (error) {
			console.error("Error al obtener puntajes:", error);
		}
	},
	getOneScore: async (id_user) => {
		try {
			const response = await getOneScoreReq(id_user);
			set({ score: response.data });
			return response;
		} catch (error) {
			console.error("Error al obtener puntaje:", error);
		}
	},
	createScore: async (id_user, score) => {
		try {
			const response = await createScoreReq(id_user, score);
			set({ score: response });
			return response;
		} catch (error) {
			console.error("Error al crear puntaje:", error);
		}
	},
	updateScore: async (id_user, newScore) => {
		try {
			const response = await updateScoreReq(id_user, newScore);
			set({ score: response });
			return response;
		} catch (error) {
			console.error("Error al actualizar puntaje:", error);
		}
	},
}));
