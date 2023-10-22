import JoinRoom from "../pages/JoinRoom";
import InGame from "../pages/InGame";
import ChangeUsername from "../pages/ChangeUsername";
import ChooseProfileImg from "../pages/ChooseProfileImg";
import Profile from "../pages/Profile";

import { bgMainColor } from "./bgColor";

export const reqLogInRoutes = [
	{
		path: "/JoinRoom",
		bgColor: bgMainColor,
		component: JoinRoom,
	},
	{
		path: "/Juego",
		bgColor: bgMainColor,
		component: InGame,
	},

	{
		path: "/ChangeUsername",
		bgColor: bgMainColor,
		component: ChangeUsername,
	},
	{
		path: "/ChooseProfileImg",
		bgColor: bgMainColor,
		component: ChooseProfileImg,
	},
	{
		path: "/profile",
		bgColor: bgMainColor,
		component: Profile,
	},
];
