import InGame from "../pages/InGame";
import JoinRoom from "../pages/JoinRoom";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import WaitRoom from "../pages/WaitRoom";
import WorldScore from "../pages/WorldScore";
import ChangeUsername from "../pages/ChangeUsername";
import Error404 from "../pages/Error404";
import ChooseProfileImg from "../pages/ChooseProfileImg";
import UnAuthorized from "../pages/UnAuthorized";

export const publicRoutes = [
	{
		path: "/Juego",
		bgColor: "#834798",
		component: InGame,
	},
	{
		path: "/JoinRoom",
		bgColor: "#8630a5",
		component: JoinRoom,
	},
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
		path: "/WaitRoom",
		bgColor: "#b037db",
		component: WaitRoom,
	},
	{
		path: "/WorldScore",
		bgColor: "#b037db",
		component: WorldScore,
	},
	{
		path: "/ChangeUsername",
		bgColor: "#b037db",
		component: ChangeUsername,
	},
	{
		path: "/ChooseProfileImg",
		bgColor: "#b037db",
		component: ChooseProfileImg,
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