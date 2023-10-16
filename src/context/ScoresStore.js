import { create } from "zustand";

import { getAllScoresReq } from "../api/scores.api";

export const useScoreStore = create((set) => ({
	scores: [],
	getAllScores: async () => {
		try {
			const response = await getAllScoresReq();
			set({ scores: response.data });
			return response;
		} catch (error) {}
	},
}));
