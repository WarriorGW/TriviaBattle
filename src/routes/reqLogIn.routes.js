import JoinRoom from "../pages/JoinRoom";
import InGame from "../pages/InGame";
import ChangeUsername from "../pages/ChangeUsername";
import ChooseProfileImg from "../pages/ChooseProfileImg";
import Profile from "../pages/Profile";

export const reqLogInRoutes = [
	{
		path: "/JoinRoom",
		bgColor: "#8630a5",
		component: JoinRoom,
	},
	{
		path: "/Juego",
		bgColor: "#834798",
		component: InGame,
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
		path: "/profile",
		bgColor: "#b037db",
		component: Profile,
	},
];
