import AddQuestion from "../pages/AddQuestion";
import UserTable from "../tables/UserTable";
import Tables from "../pages/Tables";
import QuestionTable from "../tables/QuestionTable";

export const privateRoutes = [
	{
		path: "/AddQuestion",
		bgColor: "#5f4b98",
		component: AddQuestion,
	},

	{
		path: "/Tables",
		bgColor: "#b037db",
		component: Tables,
	},

	{
		path: "/Tables/users",
		bgColor: "#b037db",
		component: UserTable,
	},
	{
		path: "/Tables/questions",
		bgColor: "#b037db",
		component: QuestionTable,
	},
];
