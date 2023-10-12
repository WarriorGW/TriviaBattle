import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import WorldScore from "../pages/WorldScore";
import Error404 from "../pages/Error404";
import UnAuthorized from "../pages/UnAuthorized";

export const publicRoutes = [
	{
		path: "/LogIn",
		bgColor: "#d86aff",
		component: LogIn,
	},
	{
		path: "/Register",
		bgColor: "#d86aff",
		component: Register,
	},
	{
		path: "/WorldScore",
		bgColor: "#b037db",
		component: WorldScore,
	},
	{
		path: "/unauthorized",
		bgColor: "#b037db",
		component: UnAuthorized,
	},
	{
		path: "*",
		bgColor: "#b037db",
		component: Error404,
	},
];
