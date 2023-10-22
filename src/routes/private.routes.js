import AddQuestion from "../pages/AddQuestion";
import UserTable from "../tables/UserTable";
import Tables from "../pages/Tables";
import QuestionTable from "../tables/QuestionTable";

import { bgMainColor } from "./bgColor";

export const privateRoutes = [
	{
		path: "/AddQuestion",
		bgColor: bgMainColor,
		component: AddQuestion,
	},

	{
		path: "/Tables",
		bgColor: bgMainColor,
		component: Tables,
	},

	{
		path: "/Tables/users",
		bgColor: bgMainColor,
		component: UserTable,
	},
	{
		path: "/Tables/questions",
		bgColor: bgMainColor,
		component: QuestionTable,
	},
];
