import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import WorldScore from "../pages/WorldScore";
import Error404 from "../pages/Error404";
import UnAuthorized from "../pages/UnAuthorized";
import NeedLogIn from "../pages/NeedLogIn";

export const publicRoutes = [
	{
		path: "/LogIn",
		bgColor: "#d86aff",
		component: LogIn,
	},
	{
		path: "/needLogIn",
		bgColor: "#8630a5",
		component: NeedLogIn,
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
