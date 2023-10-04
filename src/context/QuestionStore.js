import { create } from "zustand";

import {
	getAllQuestionsReq,
	getOneQuestionReq,
	createQuestionReq,
	updateQuestionReq,
	deleteQuestionReq,
} from "../api/questions.api";

export const useQuestionStore = create((set) => ({
	questions: [],
	getAllQuestions: async () => {
		try {
			const response = await getAllQuestionsReq();
			set({ questions: response.data });
		} catch (error) {
			console.error("Error al obtener preguntas:", error);
		}
	},
	getOneQuestion: async (id) => {
		try {
			const response = await getOneQuestionReq(id);
			set({ question: response.data });
		} catch (error) {
			console.error("Error al obtener pregunta:", error);
		}
	},
	createQuestion: async (question) => {
		try {
			const response = await createQuestionReq(question);
			set({ question: response.data });
		} catch (error) {
			console.error("Error al crear pregunta:", error);
		}
	},
	updateQuestion: async (id, newValue) => {
		try {
			const response = await updateQuestionReq(id, newValue);
			set({ question: response.data });
		} catch (error) {
			console.error("Error al actualizar pregunta:", error);
		}
	},
	deleteQuestion: async (id) => {
		try {
			const response = await deleteQuestionReq(id);
			set({ question: response.data });
		} catch (error) {
			console.error("Error al eliminar pregunta:", error);
		}
	},
}));
