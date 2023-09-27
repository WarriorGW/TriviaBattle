// Importar todas las paginas desde la carpeta de pages
import AddQuestion from "./pages/AddQuestion";
import InGame from "./pages/InGame";
import JoinRoom from "./pages/JoinRoom";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import WaitRoom from "./pages/WaitRoom";
import WorldScore from "./pages/WorldScore";
import TableQuestions from "./pages/TableQuestions";
import ChangeUsername from "./pages/ChangeUsername";
import Error404 from "./pages/Error404";
import ChooseProfileImg from "./pages/ChooseProfileImg";

export const routes = [
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
		path: "/Register",
		bgColor: "#d86aff",
		component: Register,
	},
	{
		path: "/AddQuestion",
		bgColor: "#5f4b98",
		component: AddQuestion,
	},
	{
		path: "/LogIn",
		bgColor: "#d86aff",
		component: LogIn,
	},
	{
		path: "/WorldScore",
		bgColor: "#b037db",
		component: WorldScore,
	},
	{
		path: "/WaitRoom",
		bgColor: "#b037db",
		component: WaitRoom,
	},
	{
		path: "/ChangeUsername",
		bgColor: "#b037db",
		component: ChangeUsername,
	},
	{
		path: "/TableQuestions",
		bgColor: "#b037db",
		component: TableQuestions,
	},
	{
		path: "/ChooseProfileImg",
		bgColor: "#b037db",
		component: ChooseProfileImg,
	},
	{
		path: "*",
		bgColor: "#fff",
		component: Error404,
	},
];
