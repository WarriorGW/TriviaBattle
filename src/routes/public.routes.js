import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import WorldScore from "../pages/WorldScore";
import Error404 from "../pages/Error404";
import UnAuthorized from "../pages/UnAuthorized";
import NeedLogIn from "../pages/NeedLogIn";

import { bgMainColor } from "./bgColor";

export const publicRoutes = [
	{
		path: "/LogIn",
		bgColor: bgMainColor,
		component: LogIn,
	},
	{
		path: "/needLogIn",
		bgColor: bgMainColor,
		component: NeedLogIn,
	},
	{
		path: "/Register",
		bgColor: bgMainColor,
		component: Register,
	},
	{
		path: "/WorldScore",
		bgColor: bgMainColor,
		component: WorldScore,
	},
	{
		path: "/unauthorized",
		bgColor: bgMainColor,
		component: UnAuthorized,
	},
	{
		path: "*",
		bgColor: bgMainColor,
		component: Error404,
	},
];
